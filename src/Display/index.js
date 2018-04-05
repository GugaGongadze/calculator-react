import React, { Component } from 'react';
import './index.css';

class Display extends Component {
	render() {
		return (
			<div className="display">
				<h1 className="output">{this.props.display}</h1>
			</div>
		);
	}
}

export default Display;
