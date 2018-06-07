import React from 'react';
import { snapshot } from 'test/helpers';
import TopPage from '.';

const props1 = {
  user: {
    loading: false,
    body: {},
    status: null,
    exception: {},
  },
  postUser: jest.fn(),
};

const props2 = {
  user: {
    loading: true,
    body: {},
    status: null,
    exception: {},
  },
  postUser: jest.fn(),
};

const props3 = {
  user: {
    loading: false,
    body: {
      id: 'ABC123',
    },
    status: 200,
    exception: {},
  },
  postUser: jest.fn(),
};

const props4 = {
  user: {
    loading: false,
    body: {
      error: 'Something failed!',
    },
    status: 500,
    exception: {},
  },
  postUser: jest.fn(),
};

const props5 = {
  user: {
    loading: false,
    body: {},
    exception: { message: 'Failed to fetch' },
  },
  postUser: jest.fn(),
};

snapshot('TopPage/ユーザID取得前', <TopPage {...props1} />);
snapshot('TopPage/ユーザID取得中', <TopPage {...props2} />);
snapshot('TopPage/ユーザID取得成功', <TopPage {...props3} />);
snapshot('TopPage/ユーザID取得レスポンスエラー', <TopPage {...props4} />);
snapshot('TopPage/ユーザID取得例外発生', <TopPage {...props5} />);
