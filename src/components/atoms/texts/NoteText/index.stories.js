import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import NoteText from '.';

const stories = storiesOf('atoms/texts/NoteText', module);

stories.add(
  'nomal',
  withInfo('注意書き用文字列')(() => <NoteText>{text('text', '注意書き用文字列')}</NoteText>),
);

stories.add(
  'emphasis',
  withInfo('強調する注意書き用文字列')(() => (
    <NoteText emphasis>{text('text', '強調する注意書き用文字列')}</NoteText>
  )),
);

stories.add(
  'red',
  withInfo('赤い注意書き用文字列')(() => (
    <NoteText red>{text('text', '赤い注意書き用文字列')}</NoteText>
  )),
);

stories.add(
  'red-emphasis',
  withInfo('強調する赤い注意書き用文字列')(() => (
    <NoteText emphasis red>
      {text('text', '強調する赤い注意書き用文字列')}
    </NoteText>
  )),
);
