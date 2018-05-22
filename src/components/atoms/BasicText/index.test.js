import React from 'react';
import { snapshot } from '../../../../test/helpers';
import BasicText, { Text } from './';

snapshot('BasicText', <BasicText>テキスト</BasicText>);
snapshot('BasicText/Text', <Text>テキスト</Text>);
