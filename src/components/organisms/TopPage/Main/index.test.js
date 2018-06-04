import React from 'react';
import { snapshot } from 'test/helpers';
import Main from '.';

const props = {
  onClickStartReissue: jest.fn(),
};

snapshot('Main', <Main {...props} />);
