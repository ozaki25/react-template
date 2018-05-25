import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import MenuButton from '.';

const stories = storiesOf('atoms/buttons', module);

stories.add(
  'MenuButton',
  withInfo('MenuButton')(() => (
    <MenuButton onClick={action('click button')}>{text('text', 'ボタン')}</MenuButton>
  )),
);
