import React, { Component } from 'react';
import './index.css';

import SpecialOperators from '../SpecialOperators';
import Operators from '../Operators';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.onButtonsClicked = this.onButtonsClicked.bind(this);
    this.onFractionClick = this.onFractionClick.bind(this);
  }

  onButtonsClicked(e) {
    if (
      e.target.className === 'num-button' ||
      e.target.className === 'slanted-button'
    ) {
      const newDisplay = e.target.dataset.content;
      this.props.updateDisplay(newDisplay);
      this.props.updateEquation(newDisplay);
    }
  }

  onFractionClick(e) {
    // console.log(e.target.dataset.content);
    const fraction = e.target.dataset.content;
    this.props.updateDisplay(fraction);
    this.props.updateEquation(fraction);
  }

  updateOperation = operator => {
    this.props.updateEquation(operator);

    if (operator === '*') {
      this.props.updateDisplay('x');
    } else if (operator === '/') {
      this.props.updateDisplay('÷');
    } else {
      this.props.updateDisplay(operator);
    }
  };

  clearEverything = () => {
    this.props.clearState();
  };

  invert = () => {
    this.props.invert();
  };

  calculatePercent = () => {
    console.log('calculate percent');
  };

  evaluateEquation = () => {
    console.log('evaluate equation');
  };

  render() {
    return (
      <div className="controls">
        <SpecialOperators
          clearEverything={this.clearEverything}
          invert={this.invert}
          calculatePercent={this.calculatePercent}
        />
        <Operators
          updateOperation={this.updateOperation}
          evaluateEquation={this.evaluateEquation}
        />
        <div className="positive-numbers" onClick={this.onButtonsClicked}>
          <button data-content="7" className="num-button">
            7
          </button>
          <button data-content="8" className="num-button">
            8
          </button>
          <button data-content="9" className="num-button">
            9
          </button>
          <button data-content="4" className="num-button">
            4
          </button>
          <button data-content="5" className="num-button">
            5
          </button>
          <button data-content="6" className="num-button">
            6
          </button>
          <button data-content="1" className="num-button">
            1
          </button>
          <button data-content="2" className="num-button">
            2
          </button>
          <button data-content="3" className="num-button">
            3
          </button>
        </div>
        <div className="zero" onClick={this.onButtonsClicked}>
          <button data-content="0" className="slanted-button">
            0
          </button>
        </div>
        <div className="point" onClick={this.onFractionClick}>
          <button data-content="." className="num-button">
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
