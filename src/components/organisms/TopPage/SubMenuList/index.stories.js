import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import SubMenuList from '.';

const stories = storiesOf('organisms/TopPage', module);

stories.add('SubMenuList', withInfo('SubMenuList')(() => <SubMenuList />));
