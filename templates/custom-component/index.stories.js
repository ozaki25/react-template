import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import COMPONENT_NAME from '.';

const stories = storiesOf('atoms/', module);

stories.add('COMPONENT_NAME', withInfo('COMPONENT_NAME')(() => <COMPONENT_NAME />));
