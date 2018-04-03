import React, { Component } from 'react';
import './index.css';

class SpecialOperators extends Component {
	render() {
		return (
			<div className="special-operators">
				<button className="special-button">AC</button>
				<button className="special-button">+/-</button>
				<button className="special-button">%</button>
			</div>
		);
	}
}

export default SpecialOperators;
