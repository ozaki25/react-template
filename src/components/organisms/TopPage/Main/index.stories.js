import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import Main from '.';

const stories = storiesOf('organisms/TopPage', module);

stories.add(
  'Main',
  withInfo('トップページのメインコンテンツ')(() => (
    <Main onClickStartReissue={action('click start reissue')} />
  )),
);
