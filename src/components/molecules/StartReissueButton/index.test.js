import React from 'react';
import { snapshot } from 'test/helpers';
import StartReissueButton, { Container, Link, Title, Description } from '.';

snapshot('StartReissueButton', <StartReissueButton href="http://google.com/" />);
snapshot('StartReissueButton/Container', <Container />);
snapshot('StartReissueButton/Link', <Link href="http://google.com/">リンク</Link>);
snapshot('StartReissueButton/Title', <Title>タイトル</Title>);
snapshot('StartReissueButton/Description', <Description>説明</Description>);
