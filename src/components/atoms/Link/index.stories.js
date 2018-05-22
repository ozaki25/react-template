import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import Link from '.';

const stories = storiesOf('atoms', module);

stories.add(
  'Link',
  withInfo('リンク用文字列')(() => (
    <Link href={text('href', 'http://google.com')}>{text('text', 'リンク')}</Link>
  )),
);
