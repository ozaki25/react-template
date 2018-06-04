import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BasicText = ({ children }) => <P>{children}</P>;

const P = styled.p`
  color: #333;
  font-size: 16px;
`;

BasicText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicText;
