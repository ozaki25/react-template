import React from 'react';
import { snapshot } from 'test/helpers';
import Link from '.';

const props = {
  onClick: jest.fn(),
};

snapshot('Link', <Link {...props}>リンク</Link>);
