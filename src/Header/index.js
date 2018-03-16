import React, { Component } from 'react';

import './index..css';

import Clock from '../Clock';
import Notch from '../Notch';
import Status from '../Status';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<Clock />
				<Notch />
				<Status />
			</div>
		);
	}
}

export default Header;
