import React from 'react';
import PropTypes from 'prop-types';
import P from '../P';

function BasicText({ children }) {
  return <Text>{children}</Text>;
}

export const Text = P.extend`
  color: #333;
  font-size: 16px;
`;

BasicText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicText;
