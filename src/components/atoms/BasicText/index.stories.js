import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import BasicText from '.';

const stories = storiesOf('atoms', module);

stories.add(
  'BasicText',
  withInfo('標準文字列')(() => <BasicText>{text('text', '標準文字列')}</BasicText>),
);
