import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import TopPage from '.';

const stories = storiesOf('pages', module);

stories.add('TopPage', withInfo('TopPage')(() => <TopPage />));
