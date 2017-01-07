
import React from 'react';

export default class FInatorOutput extends React.Component {

	render() {
		return (
			<div>
				{this.props.response}
			</div>
		);
	}

}

FInatorOutput.propTypes= {
	response: React.PropTypes.string.isRequired
};