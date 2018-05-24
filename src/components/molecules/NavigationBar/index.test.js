import React from 'react';
import { snapshot } from 'test/helpers';
import NavigationBar, { Container, Left, Title, Right } from '.';

const props = {
  title: 'タイトル',
  onClickBack: jest.fn(),
  onClickForward: jest.fn(),
};

snapshot('NavigationBar', <NavigationBar {...props} />);
snapshot('NavigationBar', <NavigationBar title="タイトル" />);
snapshot('NavigationBar/Container', <Container />);
snapshot('NavigationBar/Left', <Left />);
snapshot('NavigationBar/Title', <Title />);
snapshot('NavigationBar/Right', <Right />);
