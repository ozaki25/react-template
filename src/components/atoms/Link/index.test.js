import React from 'react';
import { snapshot } from '../../../../test/helpers';
import Link, { LinkText } from './';

const props = {
  onClick: jest.fn(),
};

snapshot('Link', <Link {...props}>リンク</Link>);
snapshot('Link/LinkText', <LinkText>リンク</LinkText>);
