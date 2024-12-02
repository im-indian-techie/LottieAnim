import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
const chai = require('chai'); 
import * as sinon from 'sinon';
import chaiDom from 'chai-dom';
import App from '../../App';

// Extend Chai assertions with chai-dom
chai.use(chaiDom);

describe('App Component', () => {
  it('renders the Lottie animation and the button', () => {
    render(<App />);

    // Find the LottieView by testID
    const lottieAnimation = screen.getByTestId('lottie-animation');
    const clickButton = screen.getByText('Click');

    // Assert the LottieView and button exist in the document
    chai.expect(lottieAnimation).to.exist;  // LottieView should be present
    chai.expect(clickButton).to.exist;  // Button should be present
  });

  it('should trigger the test function when the button is pressed', () => {
    const spy = sinon.spy(console, 'log');  // Spy on console.log to check if test() is called

    render(<App />);

    // Find and click the button
    const button = screen.getByText('Click');
    fireEvent.press(button);

    // Assert that console.log was called with the expected arguments
    chai.expect(spy.calledWith('test')).to.be.true;
    chai.expect(spy.calledWith('ashin')).to.be.true;
    chai.expect(spy.calledWith('das')).to.be.true;

    spy.restore();  // Restore the original console.log
  });
});
