import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BasicText from 'src/components/atoms/texts/BasicText';
import Link from 'src/components/atoms/buttons/Link';
import MainMenuButton from 'src/components/molecules/MainMenuButton';
import SubMenuList from 'src/components/organisms/TopPage/SubMenuList';

const Main = ({ onClickStartReissue }) => (
  <Container>
    <MenuContainer>
      <MainMenuButton
        title="利用できないキャッシュカードの再発行"
        description="磁気不良、ICチップ不良、汚損、破損等で利用できなくなったキャッシュカードの再発行"
        onClick={onClickStartReissue}
      />
      <HR />
      <SubMenuList />
    </MenuContainer>
    <BasicText>※今後、本アプリでできる手続を順次拡大していく予定です。</BasicText>
    <LinkContainer>
      <Link>ライセンスについて</Link>
    </LinkContainer>
  </Container>
);

const Container = styled.section`
  padding: 15px 10px 20px;
`;

const MenuContainer = styled.div`
  text-align: center;
`;

const LinkContainer = styled.div`
  text-align: right;
`;

const HR = styled.hr`
  border: 0;
  border-top: 1px solid #bdbdbd;
  margin-top: 15px;
  margin-bottom: 15px;
`;

Main.propTypes = {
  onClickStartReissue: PropTypes.func.isRequired,
};

export default Main;
