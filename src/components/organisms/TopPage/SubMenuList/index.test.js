import React from 'react';
import { snapshot } from 'test/helpers';
import SubMenuList, { Container, MenuButtonContainer } from '.';

snapshot('SubMenuList', <SubMenuList />);
snapshot('SubMenuList/Container', <Container />);
snapshot('SubMenuList/MenuButtonContainer', <MenuButtonContainer />);
