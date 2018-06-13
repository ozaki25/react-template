import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import BasicText from '.';

const stories = storiesOf('atoms/texts', module);

stories.add(
  'BasicText/nomal',
  withInfo('標準文字列')(() => <BasicText>{text('text', '標準文字列')}</BasicText>),
);

stories.add(
  'BasicText/emphasis',
  withInfo('強調する文字列')(() => (
    <BasicText emphasis>{text('text', '強調する文字列')}</BasicText>
  )),
);

stories.add(
  'BasicText/red',
  withInfo('強調する赤い文字列')(() => (
    <BasicText red>{text('text', '強調する赤い文字列')}</BasicText>
  )),
);

stories.add(
  'BasicText/red-emphasis',
  withInfo('強調する赤い文字列')(() => (
    <BasicText emphasis red>
      {text('text', '強調する赤い文字列')}
    </BasicText>
  )),
);
