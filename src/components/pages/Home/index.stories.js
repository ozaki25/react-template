import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Home from './';

const stories = storiesOf('pages', module);
stories.addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>);
stories.add('Home', withInfo('Home')(() => <Home />));
