import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavigationTitleText({ children }) {
  return <P>{children}</P>;
}

export const P = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

NavigationTitleText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationTitleText;
