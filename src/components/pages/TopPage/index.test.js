import React from 'react';
import { snapshot } from 'test/helpers';
import TopPage from '.';

const props1 = {
  loading: false,
  userId: '',
  createUserId: jest.fn(),
};

const props2 = {
  loading: true,
  userId: '',
  createUserId: jest.fn(),
};

const props3 = {
  loading: false,
  userId: 'ABC123',
  createUserId: jest.fn(),
};

snapshot('TopPage/ユーザID取得前', <TopPage {...props1} />);
snapshot('TopPage/ユーザID取得中', <TopPage {...props2} />);
snapshot('TopPage/ユーザID取得後', <TopPage {...props3} />);
