import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MenuButton({ children, onClick }) {
  return (
    <Button onClick={onClick}>
      <Label>{children}</Label>
    </Button>
  );
}

export const Button = styled.button`
  border: solid 1px #eee;
  box-shadow: 1px 1px 1px #bdbdbd;
  display: inline-block;
  height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  width: 300px;
  &:active {
    opacity: 0.5;
    box-shadow: 1px 1px 1px #f5f5f5;
  }
`;

export const Label = styled.p`
  color: #212121;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
