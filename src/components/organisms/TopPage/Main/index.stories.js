import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Main from '.';

const stories = storiesOf('organisms/TopPage', module);

stories.add('Main', withInfo('トップページのメインコンテンツ')(() => <Main />));
