import React from 'react';
import { snapshot } from 'test/helpers';
import MainMenuButton from '.';

const title = 'タイトル';
const description = '説明';
const onClick = jest.fn();

const props = {
  title,
  description,
  onClick,
};

snapshot('StartReissueButton', <MainMenuButton {...props} />);
