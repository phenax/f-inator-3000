
import React from 'react';

import FInatorInput from './FInatorInput.jsx';
import FInatorOutput from './FInatorOutput.jsx';

import fuckinate from '../fuckinate';

import styles from '../styles/finator';


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

		return fuckinate.transform(string);
	}


	/**
	 * For submit handler
	 * 
	 * @param  {string} text  The text from input
	 * @param  {Event}  e
	 */
	onSubmit(text) {

		let response;

		if(text.length > 0)
			response= this._finateText(text);
		else
			response= this.generateRandomError();

		this.setState({ response });
	}


	/**
	 * Generate a random error message
	 * 
	 * @return {string}  Error message
	 */
	generateRandomError() {

		const errorMessages= [
			'Fucking type something you piece of shit',
			'Stop fucking around',
			'Are you fucking kidding me?',
			'This would\'ve been a lot simpler if you weren\'t a fucking idiot',
			'Do I have to blow you to make you type something?',
			'I bet you are one of the people who think that global warming is a fucking conspiracy',
		];

		return errorMessages[Math.floor(Math.random()*errorMessages.length)];
	}


	render() {

		return (

			<div style={styles.host}>

				<h2 style={styles.header}>Fuckinator 3000</h2>

				<FInatorOutput response={this.state.response} />

				<FInatorInput onSubmit={this.onSubmit.bind(this)} />

			</div>
		);
	}
}
