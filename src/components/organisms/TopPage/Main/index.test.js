import React from 'react';
import { snapshot } from 'test/helpers';
import Main, { Container, MainMenuContainer, LinkContainer } from '.';

const props = {
  onClickStartReissue: jest.fn(),
};

snapshot('Main', <Main {...props} />);
snapshot('Main/Container', <Container />);
snapshot('Main/StartReissueButtonContainer', <MainMenuContainer />);
snapshot('Main/LinkContainer', <LinkContainer />);
