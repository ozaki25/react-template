import React from 'react';
import { snapshot } from '../../../../test/helpers';
import NavigationTitleText, { Text } from './';

snapshot('NavigationTitleText', <NavigationTitleText>タイトル</NavigationTitleText>);
snapshot('NavigationTitleText/Text', <Text>タイトル</Text>);
