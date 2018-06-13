import React from 'react';
import { snapshot } from 'test/helpers';
import BasicText from '.';

snapshot('BasicText/nomal', <BasicText>テキスト</BasicText>);
snapshot('BasicText/emphasis', <BasicText emphasis>テキスト</BasicText>);
snapshot('BasicText/red', <BasicText red>テキスト</BasicText>);
snapshot(
  'BasicText/red-emphasis',
  <BasicText red emphasis>
    テキスト
  </BasicText>,
);
