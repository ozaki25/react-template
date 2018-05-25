import React from 'react';
import { snapshot } from 'test/helpers';
import StartReissueButton, { Button, Title, Description } from '.';

const props = {
  onClick: jest.fn(),
};

snapshot('StartReissueButton', <StartReissueButton {...props} />);
snapshot('StartReissueButton/Container', <Button {...props} />);
snapshot('StartReissueButton/Title', <Title>タイトル</Title>);
snapshot('StartReissueButton/Description', <Description>説明</Description>);
