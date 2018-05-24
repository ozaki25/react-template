import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NotFound from '.';

const stories = storiesOf('pages', module);

stories.add('NotFound', withInfo('404ページ')(() => <NotFound />));
