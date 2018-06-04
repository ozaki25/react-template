import React from 'react';
import { snapshot } from 'test/helpers';
import NavigationBarLink from '.';

const props = {
  onClick: jest.fn(),
};

snapshot('NavigationBarLink', <NavigationBarLink {...props}>&lt;</NavigationBarLink>);
