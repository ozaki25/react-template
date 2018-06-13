import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import BasicText from '.';

const stories = storiesOf('atoms/texts/BasicText', module);

stories.add(
  'nomal',
  withInfo('標準文字列')(() => <BasicText>{text('text', '標準文字列')}</BasicText>),
);

stories.add(
  'emphasis',
  withInfo('強調する文字列')(() => (
    <BasicText emphasis>{text('text', '強調する文字列')}</BasicText>
  )),
);

stories.add(
  'red',
  withInfo('強調する赤い文字列')(() => (
    <BasicText red>{text('text', '強調する赤い文字列')}</BasicText>
  )),
);

stories.add(
  'red-emphasis',
  withInfo('強調する赤い文字列')(() => (
    <BasicText emphasis red>
      {text('text', '強調する赤い文字列')}
    </BasicText>
  )),
);
