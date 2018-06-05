import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import TopPage from '.';

const stories = storiesOf('pages/TopPage', module);

const props1 = {
  loading: false,
  userId: '',
  createUserId: () => {},
};

const props2 = {
  loading: true,
  userId: '',
  createUserId: () => {},
};

const props3 = {
  loading: false,
  userId: 'ABC123',
  createUserId: () => {},
};

stories.add('ユーザID取得前', withInfo('TopPage')(() => <TopPage {...props1} />));
stories.add('ユーザID取得中', withInfo('TopPage')(() => <TopPage {...props2} />));
stories.add('ユーザID取得後', withInfo('TopPage')(() => <TopPage {...props3} />));
