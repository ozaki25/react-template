import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Home from '.';

const props = {
  greetings: [],
  greet: () => {},
  bye: () => {},
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
  getWeather: () => {},
};

const stories = storiesOf('pages', module);
stories.addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>);
stories.add('Home', withInfo('Home')(() => <Home {...props} />));
