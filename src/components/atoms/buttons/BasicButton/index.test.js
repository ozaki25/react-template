import React from 'react';
import { snapshot } from 'test/helpers';
import BasicButton from '.';

const props = {
  onClick: jest.fn(),
};

snapshot('BasicButton/nomal', <BasicButton {...props}>ボタン</BasicButton>);
snapshot(
  'BasicButton/disabled',
  <BasicButton {...props} disabled>
    ボタン
  </BasicButton>,
);
snapshot(
  'BasicButton/red',
  <BasicButton {...props} red>
    ボタン
  </BasicButton>,
);
snapshot(
  'BasicButton/small',
  <BasicButton {...props} small>
    ボタン
  </BasicButton>,
);
snapshot(
  'BasicButton/xsmall',
  <BasicButton {...props} xsmall>
    ボタン
  </BasicButton>,
);
