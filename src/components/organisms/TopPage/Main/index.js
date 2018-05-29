import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BasicText from 'src/components/atoms/texts/BasicText';
import LinkText from 'src/components/atoms/texts/LinkText';
import MainMenuButton from 'src/components/molecules/MainMenuButton';

function Main({ onClickStartReissue }) {
  return (
    <Container>
      <MainMenuContainer>
        <MainMenuButton
          title="利用できないキャッシュカードの再発行"
          description="磁気不良、ICチップ不良、汚損、破損等で利用できなくなったキャッシュカードの再発行"
          onClick={onClickStartReissue}
        />
      </MainMenuContainer>
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

export const MainMenuContainer = styled.div`
  text-align: center;
`;

export const LinkContainer = styled.div`
  text-align: right;
`;

Main.propTypes = {
  onClickStartReissue: PropTypes.func.isRequired,
};

export default Main;
