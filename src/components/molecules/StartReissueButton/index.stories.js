import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import ReissueStartButton from './';

const stories = storiesOf('molecules', module);

stories.add(
  'StartReissueButton',
  withInfo('再発行の手続きをスタートするボタン')(() => (
    <ReissueStartButton href={text('href', 'http://google.com')} />
  )),
);
