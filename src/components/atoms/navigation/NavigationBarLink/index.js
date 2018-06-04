import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavigationBarLink = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>;

const Button = styled.button`
  font-size: 30px;
  color: #e70000;
`;

NavigationBarLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

NavigationBarLink.defaultProps = {
  onClick: null,
};

export default NavigationBarLink;
