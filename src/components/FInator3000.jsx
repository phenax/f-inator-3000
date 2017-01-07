
import React from 'react';
import nlp from 'nlp_compromise';

import FInatorInput from './FInatorInput.jsx';
import FInatorOutput from './FInatorOutput.jsx';

import rootStyles from '../styles/finator';

/**
 * Fuckinator 3000 app component
 */
export default class FInator3000 extends React.Component {

	constructor(props) {
		super(props);

		// Default message
		this.state= {
			response: 'Hey there! Let me make your string fucking awesome'
		};
	}

	/**
	 * Fuckinate the string
	 * 
	 * @param  {string} string  Input text
	 * 
	 * @return {string}         Fuckinated awesome text
	 */
	_finateText(string) {

		// Convert string into nlp object
		let response= nlp.text(string);

		// Add 'fucking' before nouns
		response
			.terms()
			.filter(term => [ 'noun' ].indexOf(term.tag.toLowerCase()) > -1)
			.forEach(term => {
				term.text= 'fucking ' + term.text;
			});

		// Add tf after question words
		response
			.terms()
			.filter(term => [ 'what', 'how', 'why' ].indexOf(term.text.toLowerCase()) > -1)
			.forEach(term => {
				term.text= term.text + ' the fuck';
			});

		return response.text();
	}


	/**
	 * For submit handler
	 * 
	 * @param  {string} text  The text from input
	 * @param  {Event}  e
	 */
	onSubmit(text) {

		const response= this._finateText(text);

		this.setState({ response });
	}


	render() {
		return (
			<div style={rootStyles}>
				<FInatorOutput response={this.state.response} />
				<FInatorInput onSubmit={this.onSubmit.bind(this)} />
			</div>
		);
	}

}
