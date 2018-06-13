import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'src/constants/Color';

const Link = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>;

const Button = styled.button`
  color: ${Color.link};
  font-size: 16px;
  text-decoration: underline;
`;

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  onClick: null,
};

export default Link;
