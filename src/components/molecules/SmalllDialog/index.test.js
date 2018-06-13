import React from 'react';
import { snapshot } from 'test/helpers';
import SmallDialog from '.';

const props1 = {
  title: 'タイトル',
  children: 'コンテンツ',
  buttonLabel: 'OK',
  onClick: jest.fn(),
};

const props2 = {
  children: 'コンテンツ',
  buttonLabel: 'OK',
  onClick: jest.fn(),
};

snapshot('SmallDialog/タイトルあり', <SmallDialog {...props1} />);
snapshot('SmallDialog/タイトルなし', <SmallDialog {...props2} />);
