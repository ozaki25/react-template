import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { snapshot } from 'test/helpers';
import Home from '.';

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
  getWeather: jest.fn(),
};

snapshot(
  'Hello',
  <BrowserRouter>
    <Home {...props} />
  </BrowserRouter>,
);
