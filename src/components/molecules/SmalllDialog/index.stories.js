import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SmallDialog from '.';

const stories = storiesOf('molecules/Dialogs', module);

const decorator = storyFn => (
  <div style={{ backgroundColor: '#bbb', padding: 15 }}>{storyFn()}</div>
);

stories.addDecorator(decorator);

stories.add(
  'SmallDialog/タイトルあり',
  withInfo('SmallDialog')(() => (
    <SmallDialog
      title={text('title', '見出し')}
      buttonLabel={text('button', 'OK')}
      onClick={action('click')}
    >
      {text('content', '複数行になるように長めの文章にしています')}
    </SmallDialog>
  )),
);

stories.add(
  'SmallDialog/タイトルなし',
  withInfo('SmallDialog')(() => (
    <SmallDialog buttonLabel={text('button', 'OK')} onClick={action('click')}>
      {text('content', '複数行になるように長めの文章にしています')}
    </SmallDialog>
  )),
);
