import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavigationBarLink({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export const Button = styled.button`
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
