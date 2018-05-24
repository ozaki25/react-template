import React from 'react';
import { snapshot } from '../../../../test/helpers';
import NavigationBarLink, { Link } from './';

const props = {
  onClick: jest.fn(),
};

snapshot('NavigationBarLink', <NavigationBarLink {...props}>&lt;</NavigationBarLink>);
snapshot('NavigationBarLink/Link', <Link>&lt;</Link>);
