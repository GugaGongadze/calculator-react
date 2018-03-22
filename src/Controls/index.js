import React, { Component } from 'react';
import './index..css';

import SpecialOperators from '../SpecialOperators';
import Operators from '../Operators';

class Controls extends Component {
	render() {
		return (
			<div className="controls">
				<SpecialOperators />
				<Operators />
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
				<div className="zero">
					<button className="slanted-button">0</button>
				</div>
				<div className="point">
					<button className="num-button">.</button>
				</div>
			</div>
		);
	}
}

export default Controls;
