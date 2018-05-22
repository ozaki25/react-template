import React from 'react';
import { snapshot } from '../../../../../test/helpers';
import Main, { Container, StartReissueButtonContainer, LinkContainer } from '.';

snapshot('Main', <Main />);
snapshot('Main/Container', <Container />);
snapshot('Main/StartReissueButtonContainer', <StartReissueButtonContainer />);
snapshot('Main/LinkContainer', <LinkContainer />);
