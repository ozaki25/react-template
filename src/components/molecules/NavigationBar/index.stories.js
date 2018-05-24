import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import NavigationBar from '.';

const stories = storiesOf('molecules', module);

stories
  .add(
    'NavigationBar/all props',
    withInfo('NavigationBar')(() => (
      <NavigationBar
        title={text('title', 'タイトル')}
        onClickBack={action('Back')}
        onClickForward={action('Forward')}
      />
    )),
  )
  .add(
    'NavigationBar/minimum props',
    withInfo('NavigationBar')(() => <NavigationBar title={text('title', 'タイトル')} />),
  );
