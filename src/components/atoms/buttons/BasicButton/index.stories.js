import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import BasicButton from '.';

const stories = storiesOf('atoms/buttons/BasicButton', module);

stories.add(
  'nomal',
  withInfo('BasicButton/nomal')(() => (
    <BasicButton onClick={action('click')} disabled={boolean('disabled', false)}>
      {text('text', 'ボタン')}
    </BasicButton>
  )),
);

stories.add(
  'red',
  withInfo('BasicButton/red')(() => (
    <BasicButton red onClick={action('click')} disabled={boolean('disabled', false)}>
      {text('text', 'ボタン')}
    </BasicButton>
  )),
);

stories.add(
  'small',
  withInfo('BasicButton/small')(() => (
    <BasicButton small onClick={action('click')} disabled={boolean('disabled', false)}>
      {text('text', 'ボタン')}
    </BasicButton>
  )),
);

stories.add(
  'xsmall',
  withInfo('BasicButton/xsmall')(() => (
    <BasicButton xsmall onClick={action('click')} disabled={boolean('disabled', false)}>
      {text('text', 'ボタン')}
    </BasicButton>
  )),
);
