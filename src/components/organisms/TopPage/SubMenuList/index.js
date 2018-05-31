import React from 'react';
import styled from 'styled-components';
import MenuButton from 'src/components/atoms/buttons/MenuButton';

function SubMenuList() {
  return (
    <Container>
      <MenuButtonContainer>
        <MenuButton onClick={() => console.log('click')}>申込履歴の確認</MenuButton>
      </MenuButtonContainer>
      <MenuButtonContainer>
        <MenuButton onClick={() => console.log('click')}>よくあるご質問</MenuButton>
      </MenuButtonContainer>
      <MenuButtonContainer>
        <MenuButton onClick={() => console.log('click')}>残高照会・振込等</MenuButton>
      </MenuButtonContainer>
    </Container>
  );
}

export const Container = styled.ul`
  margin: 0;
  padding: 0;
`;

export const MenuButtonContainer = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`;

SubMenuList.propTypes = {};

SubMenuList.defaultProps = {};

export default SubMenuList;
