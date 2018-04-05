import React, { Component } from 'react';
import './index.css';

class Operators extends Component {
	constructor(props) {
		super(props);

		this.onOperatorClick = this.onOperatorClick.bind(this);
		this.onEqualityClick = this.onEqualityClick.bind(this);
	}

	onOperatorClick(e) {
		if (e.target.className === 'operator-button') {
			const operator = e.target.dataset.content;
			this.props.updateOperation(operator);
		}
	}

	onEqualityClick(e) {
		this.props.evaluateEquation();
	}

	render() {
		return (
			<div className="operators" onClick={this.onOperatorClick}>
				<button data-content="/" className="operator-button">÷</button>
				<button data-content="*" className="operator-button">x</button>
				<button data-content="-" className="operator-button">-</button>
				<button data-content="+" className="operator-button">+</button>
				<button className="equality-button" onClick={this.onEqualityClick}>=</button>
			</div>
		);
	}
}

export default Operators;
