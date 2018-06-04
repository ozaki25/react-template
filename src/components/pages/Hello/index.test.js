import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { snapshot } from 'test/helpers';
import Hello from '.';

snapshot(
  'Hello',
  <BrowserRouter>
    <Hello />
  </BrowserRouter>,
);
