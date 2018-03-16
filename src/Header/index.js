import React, { Component } from 'react';

import connectionIcon from '../icons/connection.png';
import alarmIcon from '../icons/alarm.png';
import batteryIcon from '../icons/battery.png';

import './index..css';

class Header extends Component {
	render() {
		return (
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
		);
	}
}

export default Header;
