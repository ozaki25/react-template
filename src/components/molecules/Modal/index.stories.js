import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Modal from '.';

const props = {
  title: '通信エラー',
  onClick: action('click'),
  buttonLabel: 'OK',
};

const stories = storiesOf('molecules/Moadl', module);

stories.add(
  '通常パターン',
  withInfo('Modal')(() => (
    <Modal {...props}>{text('text', '通信できませんでした。リトライします。')}</Modal>
  )),
);
