
import React from 'react';

import outputStyles from '../styles/finator__output';

export default class FInatorOutput extends React.Component {

	render() {
		return (
			<div style={outputStyles.host}>
				{this.props.response}
			</div>
		);
	}

}

FInatorOutput.propTypes= {
	response: React.PropTypes.string.isRequired
};