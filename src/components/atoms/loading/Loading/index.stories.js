import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Loading from '.';

const stories = storiesOf('atoms/Loading', module);

stories.add(
  'show',
  withInfo('Lodging非表示')(() => (
    <div>
      <Loading show />
      <p>サンプル</p>
    </div>
  )),
);
stories.add(
  'hide',
  withInfo('Loading表示')(() => (
    <div>
      <Loading />
      <p>サンプル</p>
    </div>
  )),
);
