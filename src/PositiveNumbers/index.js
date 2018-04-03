import React, { Component } from 'react';
import './index.css';

class PositiveNumbers extends Component {
	render() {
		return (
			<div className="positive-numbers">
				<button className="num-button">7</button>
				<button className="num-button">8</button>
				<button className="num-button">9</button>
				<button className="num-button">4</button>
				<button className="num-button">5</button>
				<button className="num-button">6</button>
				<button className="num-button">1</button>
				<button className="num-button">2</button>
				<button className="num-button">3</button>
			</div>
		);
	}
}

export default PositiveNumbers;
