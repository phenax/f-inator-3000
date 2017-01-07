
import React from 'react';

import styles from '../styles/finator__input';


/**
 * Fuckinator input
 */
export default class FInatorInput extends React.Component {

	// form submit handler
	onSubmit(e) {
		e.preventDefault();

		const text= this.refs.inputTextField.value;

		this.props.onSubmit(text, e);

		return false;
	}

	render() {
		return (

			<div style={styles.host}>

				<form onSubmit={this.onSubmit.bind(this)}>

					<input type='text' style={styles.input} ref={'inputTextField'} />

					<button style={styles.button}>Submit</button>

				</form>

			</div>
		);
	}
}

FInatorInput.propTypes= {
	onSubmit: React.PropTypes.func.isRequired
};
