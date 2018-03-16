import React, { Component } from 'react';

import './index..css';

class Notch extends Component {
	render() {
		return (
			<div className="notch">
				<div className="projector" />
				<div className="projector" />
				<div className="speaker" />
				<div className="camera" />
				<div className="projector" />
			</div>
		);
	}
}

export default Notch;
