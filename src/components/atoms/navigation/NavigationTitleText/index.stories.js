import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import NavigationTitleText from '.';

const stories = storiesOf('atoms/navigation', module);

stories.add(
  'NavigationTitleText',
  withInfo('ナビゲーションバーのタイトルで使うテキスト')(() => (
    <NavigationTitleText>{text('title', 'タイトル')}</NavigationTitleText>
  )),
);
