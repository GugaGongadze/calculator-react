import React, { Component } from 'react';
import './index..css';

class Operators extends Component {
	render() {
		return (
			<div className="operators">
				<button className="operator-button">÷</button>
				<button className="operator-button">x</button>
				<button className="operator-button">-</button>
				<button className="operator-button">+</button>
				<button className="operator-button">=</button>
			</div>
		);
	}
}

export default Operators;
