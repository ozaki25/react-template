import React from 'react';
import { snapshot } from 'test/helpers';
import NavigationBar from '.';

const props = {
  title: 'タイトル',
  onClickBack: jest.fn(),
  onClickForward: jest.fn(),
};

snapshot('NavigationBar', <NavigationBar {...props} />);
snapshot('NavigationBar', <NavigationBar title="タイトル" />);
