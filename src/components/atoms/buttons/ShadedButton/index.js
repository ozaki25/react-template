import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'src/constants/Color';

const ShadedButton = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>;

const Button = styled.button`
  border: solid 1px #eee;
  box-shadow: 1px 1px 1px #bdbdbd;
  color: ${Color.text};
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

ShadedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShadedButton;
