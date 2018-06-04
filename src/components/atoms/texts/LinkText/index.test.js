import React from 'react';
import { snapshot } from 'test/helpers';
import LinkText from '.';

const props = {
  onClick: jest.fn(),
};

snapshot('LinkText', <LinkText {...props}>リンク</LinkText>);
