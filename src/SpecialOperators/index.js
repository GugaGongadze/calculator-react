import React, { Component } from 'react';
import './index.css';

class SpecialOperators extends Component {
	constructor(props) {
		super(props);

		this.onAllClearClick = this.onAllClearClick.bind(this);
		this.onInvertClick = this.onInvertClick.bind(this);
		this.onPercentClick = this.onPercentClick.bind(this);
	}

	onAllClearClick() {
		this.props.clearEverything();
	}

	onInvertClick() {
		this.props.invert();
	}

	onPercentClick() {
		this.props.calculatePercent();
	}

	render() {
		return (
			<div className="special-operators">
				<button className="special-button" onClick={this.onAllClearClick}>AC</button>
				<button className="special-button" onClick={this.onInvertClick}>+/-</button>
				<button className="special-button" onClick={this.onPercentClick}>%</button>
			</div>
		);
	}
}

export default SpecialOperators;
