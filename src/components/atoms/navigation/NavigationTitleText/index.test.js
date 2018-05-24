import React from 'react';
import { snapshot } from 'test/helpers';
import NavigationTitleText, { P } from '.';

snapshot('NavigationTitleText', <NavigationTitleText>タイトル</NavigationTitleText>);
snapshot('NavigationTitleText/P', <P>タイトル</P>);
