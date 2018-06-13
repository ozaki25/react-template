import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'src/constants/Color';

const BasicButton = ({
  children, onClick, disabled, small, xsmall, red,
}) => (
  <Button onClick={onClick} disabled={disabled} small={small} xsmall={xsmall} red={red}>
    {children}
  </Button>
);

const Button = styled.button`
  background-color: ${({ red }) => (red ? Color.brand : Color.darkButton)};
  border-radius: 4px;
  color: ${Color.white};
  font-size: 16px;
  font-weight: bold;
  height: 44px;
  width: ${({ small, xsmall }) => (xsmall ? '150px' : small ? '250px' : '300px')};
`;

BasicButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  red: PropTypes.bool,
};

BasicButton.defaultProps = {
  onClick: null,
  disabled: false,
  small: false,
  xsmall: false,
  red: false,
};

export default BasicButton;
