import React, { Component } from 'react';
import './index.css';

import Header from '../Header';
import Display from '../Display';
import Nudge from '../Nudge';
import Controls from '../Controls';

class IPhone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      equation: '0',
      display: '0'
    };
  }

  updateDisplay = newDisplay => {
    if (newDisplay === '.' && this.state.display.includes('.')) return;

    let updatedValue;
    this.state.display === '0'
      ? newDisplay === '.'
        ? (updatedValue = '0' + newDisplay)
        : (updatedValue = newDisplay)
      : (updatedValue = this.state.display + newDisplay);

    this.setState({
      display: updatedValue
    });
  };

  updateEquation = newEquation => {
    newEquation = this.state.display + newEquation;

    this.setState({
      equation: newEquation
    });

    console.log(this.state.equation);
  };

  render() {
    return (
      <div className="iphone">
        <Header />
        <Display display={this.state.display} />
        <Controls
          updateDisplay={this.updateDisplay}
          updateEquation={this.updateEquation}
        />
        <Nudge />
      </div>
    );
  }
}

export default IPhone;
