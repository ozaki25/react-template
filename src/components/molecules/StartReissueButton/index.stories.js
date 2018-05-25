import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import ReissueStartButton from './';

const stories = storiesOf('molecules', module);

stories.add(
  'StartReissueButton',
  withInfo('再発行の手続きをスタートするボタン')(() => (
    <ReissueStartButton onClick={action('click button')} />
  )),
);
