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

const props3 = {
  children: 'コンテンツ',
  buttonLabel: 'OK',
  onClick: jest.fn(),
  show: false,
};

snapshot('SmallDialog/タイトルあり', <SmallDialog {...props1} />);
snapshot('SmallDialog/タイトルなし', <SmallDialog {...props2} />);
snapshot('SmallDialog/非表示', <SmallDialog {...props3} />);
