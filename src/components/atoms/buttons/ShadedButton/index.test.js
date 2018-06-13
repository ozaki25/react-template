import React from 'react';
import { snapshot } from 'test/helpers';
import MenuButton from '.';

const props = {
  onClick: jest.fn(),
};

snapshot('MenuButton', <MenuButton {...props}>ボタン</MenuButton>);
