import React from 'react';
import styled from 'styled-components';

import BasicText from '../../../atoms/BasicText';
import Link from '../../../atoms/Link';
import StartReissueButton from '../../../molecules/StartReissueButton';

function Main() {
  return (
    <Container>
      <StartReissueButtonContainer>
        <StartReissueButton href="/" />
      </StartReissueButtonContainer>
      <BasicText>※今後、本アプリでできる手続を順次拡大していく予定です。</BasicText>
      <LinkContainer>
        <Link href="#">ライセンスについて</Link>
      </LinkContainer>
    </Container>
  );
}

export const Container = styled.section`
  padding: 15px 10px 20px;
`;

export const StartReissueButtonContainer = styled.div`
  text-align: center;
`;

export const LinkContainer = styled.div`
  text-align: right;
`;

export default Main;
