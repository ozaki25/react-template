import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function BasicText({ children }) {
  return <Text>{children}</Text>;
}

export const Text = styled.p`
  color: #333;
  font-size: 16px;
`;

BasicText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicText;
