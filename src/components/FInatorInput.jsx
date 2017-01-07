
import React from 'react';


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

			<div>

				<form onSubmit={this.onSubmit.bind(this)}>

					<input type='text' ref={'inputTextField'} />

					<input type='submit' value='Submit' />

				</form>

			</div>
		);
	}
}

FInatorInput.propTypes= {
	onSubmit: React.PropTypes.func.isRequired
};
