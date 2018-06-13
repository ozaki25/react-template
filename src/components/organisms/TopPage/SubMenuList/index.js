import React from 'react';
import styled from 'styled-components';
import ShadedButton from 'src/components/atoms/buttons/ShadedButton';

const SubMenuList = () => (
  <Container>
    <ShadedButtonContainer>
      <ShadedButton onClick={() => console.log('click')}>申込履歴の確認</ShadedButton>
    </ShadedButtonContainer>
    <ShadedButtonContainer>
      <ShadedButton onClick={() => console.log('click')}>よくあるご質問</ShadedButton>
    </ShadedButtonContainer>
    <ShadedButtonContainer>
      <ShadedButton onClick={() => console.log('click')}>残高照会・振込等</ShadedButton>
    </ShadedButtonContainer>
  </Container>
);

const Container = styled.ul`
  margin: 0;
  padding: 0;
`;

const ShadedButtonContainer = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`;

SubMenuList.propTypes = {};

SubMenuList.defaultProps = {};

export default SubMenuList;
