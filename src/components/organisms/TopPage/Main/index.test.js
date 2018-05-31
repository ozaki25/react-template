import React from 'react';
import { snapshot } from 'test/helpers';
import Main, { Container, MenuContainer, LinkContainer, HR } from '.';

const props = {
  onClickStartReissue: jest.fn(),
};

snapshot('Main', <Main {...props} />);
snapshot('Main/Container', <Container />);
snapshot('Main/MenuContainer', <MenuContainer />);
snapshot('Main/LinkContainer', <LinkContainer />);
snapshot('Main/HR', <HR />);
