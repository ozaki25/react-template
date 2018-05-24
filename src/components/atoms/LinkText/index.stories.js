import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import LinkText from '.';

const stories = storiesOf('atoms', module);

stories.add(
  'LinkText',
  withInfo('リンク用文字列')(() => (
    <LinkText onClick={action('clicked LinkText')}>{text('text', 'リンク')}</LinkText>
  )),
);
