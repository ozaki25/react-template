import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import NavigationBar from '.';

const stories = storiesOf('molecules/NavigationBar', module);

stories
  .add(
    '前進/後退ボタンあり',
    withInfo('NavigationBar')(() => (
      <NavigationBar
        title={text('title', 'タイトル')}
        onClickBack={action('Back')}
        onClickForward={action('Forward')}
      />
    )),
  )
  .add(
    '前進/後退ボタンなし',
    withInfo('NavigationBar')(() => <NavigationBar title={text('title', 'タイトル')} />),
  );
