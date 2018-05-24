import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function BasicText({ children }) {
  return <P>{children}</P>;
}

export const P = styled.p`
  color: #333;
  font-size: 16px;
`;

BasicText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicText;
