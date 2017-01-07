
import React from 'react';

export default class FInatorInput extends React.Component {

	onSubmit(e) {

		const text= this.refs.inputTextField.value;

		this.props.onSubmit(text, e);

		e.preventDefault();
		return false;
	}

	render() {
		return (
			<div className='finator__input'>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type='textarea' ref={'inputTextField'} />
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}

}

FInatorInput.propTypes= {
	onSubmit: React.PropTypes.func.isRequired
};
