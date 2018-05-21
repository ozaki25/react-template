import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import COMPONENT_NAME from '.';

const stories = storiesOf('atoms', module);

stories.add('COMPONENT_NAME', withInfo('COMPONENT_NAME')(() => <COMPONENT_NAME />));
