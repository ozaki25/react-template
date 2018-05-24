import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Link from '.';

const stories = storiesOf('atoms', module);

stories.add(
  'Link',
  withInfo('リンク用文字列')(() => (
    <Link onClick={action('clicked Link')}>{text('text', 'リンク')}</Link>
  )),
);
