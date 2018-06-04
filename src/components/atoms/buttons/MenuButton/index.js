import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuButton = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>;

export const Button = styled.button`
  border: solid 1px #eee;
  box-shadow: 1px 1px 1px #bdbdbd;
  color: #212121;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  width: 300px;
  &:active {
    opacity: 0.5;
    box-shadow: 1px 1px 1px #f5f5f5;
  }
`;

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
