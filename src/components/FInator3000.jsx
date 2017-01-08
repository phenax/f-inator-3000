
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

		window.fbAsyncInit = function() {

			window.FB.init({
				appId      : '[Your App ID]',
				xfbml      : true,
				version    : 'v2.8'
			});

			window.FB.AppEvents.logPageView();
		};

		// Default message
		this.state= {
			response: 'Hey there! Let me make your string fucking awesome',
			request: null
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

		this.setState({ response, request: text });
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


	/**
	 * Shares a post on facebook when the button is clicked
	 */
	fbShareButtonClick() {

		const quoteMessage= 
			(this.state.request) ?
				`Fuckinator fuckinated my fucking text from "${this.state.request}" to: "${this.state.response}"`: null;

		window.FB.ui({
			method: 'share',
			href: 'http://fuckinator.herokuapp.com/',
			hashtag: '#fuckinator',
			mobile_iframe: true,
			quote: quoteMessage,
		}, res => {});
	}


	render() {

		return (

			<div style={styles.host}>

				<h2 style={styles.header}>Fuckinator 3000</h2>

				<FInatorOutput response={this.state.response} />

				<FInatorInput onSubmit={this.onSubmit.bind(this)} />

				{
					(this.state.request)?
						(<div style={{ textAlign: 'right' }}>
							<button style={styles.shareBtn} onClick={this.fbShareButtonClick.bind(this)}>Share on facebook</button>
						</div>): null
				}

			</div>
		);
	}
}
