
import React from 'react';

import styles from '../styles/finator__output';

export default class FInatorOutput extends React.Component {

	render() {
		return (
			<div style={styles.host}>

				<div style={styles.header}>Your awesome text:</div>

				<div style={styles.content}>{this.props.response}</div>

			</div>
		);
	}

}

FInatorOutput.propTypes= {
	response: React.PropTypes.string.isRequired
};