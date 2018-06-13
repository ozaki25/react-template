import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'src/constants/Color';

const BasicText = ({ children, emphasis, red }) => (
  <Text emphasis={emphasis} red={red}>
    {children}
  </Text>
);

const Text = styled.p`
  color: ${({ red }) => (red ? Color.brand : Color.text)};
  font-size: ${({ emphasis }) => (emphasis ? '17px' : '16px')};
  font-weight: ${({ emphasis }) => (emphasis ? 'bold' : 'nomal')};
`;

BasicText.propTypes = {
  children: PropTypes.node.isRequired,
  emphasis: PropTypes.bool,
  red: PropTypes.bool,
};

BasicText.defaultProps = {
  emphasis: false,
  red: false,
};

export default BasicText;
