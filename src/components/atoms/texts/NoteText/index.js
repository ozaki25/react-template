import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'src/constants/Color';

const NoteText = ({ children, emphasis, red }) => (
  <Text emphasis={emphasis} red={red}>
    {children}
  </Text>
);

const Text = styled.p`
  color: ${({ red }) => (red ? Color.brand : Color.text)};
  font-size: ${({ emphasis }) => (emphasis ? '16px' : '14px')};
  font-weight: ${({ emphasis }) => (emphasis ? 'bold' : 'nomal')};
`;

NoteText.propTypes = {
  children: PropTypes.node.isRequired,
  emphasis: PropTypes.bool,
  red: PropTypes.bool,
};

NoteText.defaultProps = {
  emphasis: false,
  red: false,
};

export default NoteText;
