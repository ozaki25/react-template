import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import MainMenuButton from '.';

const stories = storiesOf('molecules/MainMenuButton', module);

stories.add(
  '通常パターン',
  withInfo('メインの導線を開始するメニューボタン')(() => (
    <MainMenuButton
      title={text('title', '開始される手続きのタイトル')}
      description={text('description', '手続きの概要をここに書きます')}
      onClick={action('click button')}
    />
  )),
);
