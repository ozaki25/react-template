import React from 'react';
import { snapshot } from '../../../../test/helpers';
import NavigationBarLink, { Button } from './';

const props = {
  onClick: jest.fn(),
};

snapshot('NavigationBarLink', <NavigationBarLink {...props}>&lt;</NavigationBarLink>);
snapshot('NavigationBarLink/Button', <Button>&lt;</Button>);
