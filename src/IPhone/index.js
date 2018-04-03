import React, { Component } from 'react';
import './index.css';

import Header from '../Header';
import Display from '../Display';
import Nudge from '../Nudge';
import Controls from '../Controls';

class IPhone extends Component {
	render() {
		return (
			<div className="iphone">
				<Header />
				<Display />
				<Controls />
				<Nudge />
			</div>
		);
	}
}

export default IPhone;
