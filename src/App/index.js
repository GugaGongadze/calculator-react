import React, { Component } from 'react';
import './index..css';
import connectionIcon from '../icons/connection.png';
import alarmIcon from '../icons/alarm.png';
import batteryIcon from '../icons/battery.png';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="iphone">
					<div className="header">
						<div className="time">
							<p>9:41</p>
						</div>
						<div className="notch">
							<div className="projector" />
							<div className="projector" />
							<div className="speaker" />
							<div className="camera" />
							<div className="projector" />
						</div>
						<div className="status">
							<div className="connection">
								<img
									className="status-icon"
									src={connectionIcon}
									alt="Connection Icon"
								/>
							</div>
							<div className="alarm">
								<img
									className="status-icon"
									src={alarmIcon}
									alt="Alarm Icon"
								/>
							</div>
							<div className="battery">
								<img
									className="status-icon"
									src={batteryIcon}
									alt="battery Icon"
								/>
							</div>
						</div>
					</div>
					<div className="display">
						<h1 className="output">0</h1>
					</div>
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
					<div className="nudge" />
				</div>
			</div>
		);
	}
}

export default App;
