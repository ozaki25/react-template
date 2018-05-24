import React from 'react';
import { snapshot } from '../../../../test/helpers';
import LinkText, { Button } from './';

const props = {
  onClick: jest.fn(),
};

snapshot('LinkText', <LinkText {...props}>リンク</LinkText>);
snapshot('LinkText/Button', <Button>リンク</Button>);
