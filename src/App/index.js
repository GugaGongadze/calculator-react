import React, { Component } from 'react';
import './index..css';

class App extends Component {
	render() {
		return (
			<div className="iphone">
				<div className="controls">
					<div className="special-operators">
						<button className="special-button">AC</button>
						<button className="special-button">+/-</button>
						<button className="special-button">%</button>
					</div>
					<div className="operators">
						<button className="operator-button">÷</button>
						<button className="operator-button">x</button>
						<button className="operator-button">-</button>
						<button className="operator-button">+</button>
						<button className="operator-button">=</button>
					</div>
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
			</div>
		);
	}
}

export default App;
