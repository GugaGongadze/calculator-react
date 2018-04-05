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
    if (newEquation === '.' && this.state.display.includes('.')) return;

    if (this.state.display === '0') {
      if (newEquation === '.') {
        newEquation = '0' + newEquation
      }
    } else {
      newEquation = this.state.equation + newEquation
    }

    this.setState({
      equation: newEquation
    });
  };

  clearState = () => {
    const equation = '0';
    const display = '0';

    this.setState({
      equation,
      display
    });
  };

  invert = () => {
    let invertedDisplay;

    if (this.state.display[0] === '-') {
      invertedDisplay = this.state.display.slice(1);
    } else {
      invertedDisplay = '-' + this.state.display;
    }

    this.setState({
      display: invertedDisplay,
      equation: invertedDisplay
    });
  };

  calculatePercentage = () => {
    // TODO
  }

  evaluate = () => {
    console.log(eval(this.state.equation));
    const updatedDisplay = eval(this.state.equation);
    const updatedEquation = eval(this.state.equation);

    this.setState({
      display: updatedDisplay,
      equation: updatedEquation
    })
  }

  render() {
    return (
      <div className="iphone">
        <Header />
        <Display display={this.state.display} />
        <Controls
          updateDisplay={this.updateDisplay}
          updateEquation={this.updateEquation}
          clearState={this.clearState}
          invert={this.invert}
          calculatePercentage={this.calculatePercentage}
          evaluate={this.evaluate}
        />
        <Nudge />
      </div>
    );
  }
}

export default IPhone;
