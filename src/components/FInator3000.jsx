
import React from 'react';

import nlp from 'nlp_compromise';

window.nlp= nlp;

import FInatorInput from './FInatorInput.jsx';
import FInatorOutput from './FInatorOutput.jsx';

export default class FInator3000 extends React.Component {

	constructor(props) {
		super(props);
		
		this.state= {
			response: 'Hey dude'
		};
	}

	_finateText(string) {

		let response= nlp.text(string);

		response
			.terms()
			.filter(term => term.tag === 'Noun' || term.tag === 'Adjective')
			.forEach(term => {
				term.text= 'fucking ' + term.text;
			});

		response= nlp.text(response.text());

		response
			.terms()
			// .filter(term => term.tag === 'Verb')
			.forEach(term => {
				console.log(term);
				// term.text= 'fucking ' + term.text;
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
