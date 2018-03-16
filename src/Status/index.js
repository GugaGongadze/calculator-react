import React, { Component } from 'react';

import './index..css';

import connectionIcon from '../icons/connection.png';
import alarmIcon from '../icons/alarm.png';
import batteryIcon from '../icons/battery.png';

class Status extends Component {
	render() {
		return (
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
		);
	}
}

export default Status;
