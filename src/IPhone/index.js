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
      display: '0',
      operationFinished: false
    };
  }

  updateDisplay = newDisplay => {
    let updatedValue;

    if (this.state.operationFinished) {
      updatedValue = newDisplay;
      this.setState({
        display: updatedValue,
        operationFinished: false
      });
    } else {
      if (newDisplay === '.' && this.state.display.includes('.')) return;

      if (this.state.display === '0') {
        if (newDisplay === '.') {
          updatedValue = '0' + newDisplay;
        } else {
          updatedValue = newDisplay;
        }
      } else {
        if (
          newDisplay === '÷' ||
          newDisplay === 'x' ||
          newDisplay === '-' ||
          newDisplay === '+'
        ) {
          updatedValue = newDisplay;
        } else {
          if (
            this.state.display === '÷' ||
            this.state.display === 'x' ||
            this.state.display === '-' ||
            this.state.display === '+'
          ) {
            updatedValue = newDisplay;
          } else {
            updatedValue = this.state.display + newDisplay;
          }
        }
      }

      this.setState({
        display: updatedValue
      });
    }
  };

  updateEquation = newEquation => {
    if (
      this.state.operationFinished &&
      newEquation !== '/' &&
      newEquation !== '*' &&
      newEquation !== '-' &&
      newEquation !== '+'
    ) {
      this.setState({
        equation: newEquation,
        operationFinished: false
      });
    } else {
      if (newEquation === '.' && this.state.display.includes('.')) return;

      if (this.state.display === '0') {
        if (newEquation === '.') {
          newEquation = '0' + newEquation;
        }
      } else {
        newEquation = this.state.equation + newEquation;
      }

      this.setState({
        equation: newEquation
      });
    }
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

    if (this.state.display[0].toString() === '-') {
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
  };

  evaluate = () => {
    const updatedDisplay = round(eval(this.state.equation), 2);
    const updatedEquation = round(eval(this.state.equation), 2);

    this.setState({
      display: updatedDisplay.toString(),
      equation: updatedEquation.toString(),
      operationFinished: true
    });
  };

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

function round(number, precision) {
  const shift = function(number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }
    const numArray = ('' + number).split('e');
    return +(
      numArray[0] +
      'e' +
      (numArray[1] ? +numArray[1] + precision : precision)
    );
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}

export default IPhone;
