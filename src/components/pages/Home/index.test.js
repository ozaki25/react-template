import React from 'react';
import { snapshot } from '../../../../test/helpers';
import Home from './';

const props = {
  greetings: [],
  greet: jest.fn(),
  bye: jest.fn(),
};

snapshot('Hello', <Home {...props} />);
