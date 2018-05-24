import React from 'react';
import PropTypes from 'prop-types';
import P from '../P';

function NavigationTitleText({ children }) {
  return <Text>{children}</Text>;
}

export const Text = P.extend`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

NavigationTitleText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationTitleText;
