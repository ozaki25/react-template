import React from 'react';
import { snapshot } from 'test/helpers';
import MainMenuButton, { Button, Title, Description } from '.';

const title = 'タイトル';
const description = '説明';
const onClick = jest.fn();

const props = {
  title,
  description,
  onClick,
};

snapshot('StartReissueButton', <MainMenuButton {...props} />);
snapshot('StartReissueButton/Button', <Button onClick={onClick} />);
snapshot('StartReissueButton/Title', <Title>{title}</Title>);
snapshot('StartReissueButton/Description', <Description>{description}</Description>);
