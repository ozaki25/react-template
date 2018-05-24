import React from 'react';
import styled from 'styled-components';

import BasicText from 'src/components/atoms/texts/BasicText';
import LinkText from 'src/components/atoms/texts/LinkText';
import StartReissueButton from 'src/components/molecules/StartReissueButton';

function Main() {
  return (
    <Container>
      <StartReissueButtonContainer>
        <StartReissueButton />
      </StartReissueButtonContainer>
      <BasicText>※今後、本アプリでできる手続を順次拡大していく予定です。</BasicText>
      <LinkContainer>
        <LinkText>ライセンスについて</LinkText>
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
