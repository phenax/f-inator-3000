
import React from 'react';
import nlp from 'nlp_compromise';

import FInatorInput from './FInatorInput.jsx';
import FInatorOutput from './FInatorOutput.jsx';


window.nlp= nlp;


export default class FInator3000 extends React.Component {

	constructor(props) {
		super(props);
		
		this.state= {
			response: '____'
		};
	}

	_finateText(string) {

		let response= nlp.text(string);

		response
			.terms()
			.filter(term => [ 'noun', 'adjective' ].indexOf(term.tag.toLowerCase()) > -1)
			.forEach(term => {
				term.text= 'fucking ' + term.text;
			});

		response
			.terms()
			.filter(term => [ 'what', 'how', 'why' ].indexOf(term.text.toLowerCase()) > -1)
			.forEach(term => {
				term.text= term.text + ' the fuck';
			});

		return response.text();
	}

	onSubmit(text) {

		const response= this._finateText(text);

		this.setState({ response });
	}

	render() {
		return (
			<div className='finator'>
				<FInatorInput onSubmit={this.onSubmit.bind(this)} />
				<FInatorOutput response={this.state.response} />
			</div>
		);
	}

}
