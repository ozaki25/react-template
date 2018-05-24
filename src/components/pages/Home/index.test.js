import React from 'react';
import { snapshot } from '../../../../test/helpers';
import Home from './';

const props = {
  greetings: [],
  greet: jest.fn(),
  bye: jest.fn(),
  weather: {
    loading: false,
    body: {
      title: '東京都の天気',
      description: {
        text: '晴れ',
      },
    },
    error: {},
  },
  getWether: jest.fn(),
};

snapshot('Hello', <Home {...props} />);
