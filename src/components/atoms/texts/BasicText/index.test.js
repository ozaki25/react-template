import React from 'react';
import { snapshot } from 'test/helpers';
import BasicText, { P } from '.';

snapshot('BasicText', <BasicText>テキスト</BasicText>);
snapshot('BasicText/P', <P>テキスト</P>);
