import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import NavigationBarLink from '.';

const stories = storiesOf('atoms', module);

stories.add(
  'NavigationBarLink',
  withInfo('ナビゲーションバーの戻るボタンと進むボタンに使うリンク')(() => (
    <NavigationBarLink onClick={action('NavigationBarLink')}>&lt;</NavigationBarLink>
  )),
);
