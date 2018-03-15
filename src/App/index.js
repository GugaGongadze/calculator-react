import React, { Component } from 'react';
import './index..css';

class App extends Component {
	render() {
		return (
			<div className="iphone">
				<div className="special-operators">
					<button className="grey-butt">AC</button>
					<button className="grey-butt">+/-</button>
					<button className="grey-butt">%</button>
				</div>
				<div className="operators">
					<button className="grey-butt">÷</button>
					<button className="grey-butt">x</button>
					<button className="grey-butt">-</button>
					<button className="grey-butt">+</button>
					<button className="grey-butt">=</button>
				</div>
				<div className="positive-numbers">
					<button className="grey-butt">7</button>
					<button className="grey-butt">8</button>
					<button className="grey-butt">9</button>
					<button className="grey-butt">4</button>
					<button className="grey-butt">5</button>
					<button className="grey-butt">6</button>
					<button className="grey-butt">1</button>
					<button className="grey-butt">2</button>
					<button className="grey-butt">3</button>
				</div>
				<div className="zero">
					<button className="slanted-button">0</button>
				</div>
				<div className="point">
					<button className="grey-butt">.</button>
				</div>
			</div>
		);
	}
}

export default App;
