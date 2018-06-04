import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkText = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>;

const Button = styled.button`
  color: #666;
  font-size: 16px;
  text-decoration: underline;
`;

LinkText.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

LinkText.defaultProps = {
  onClick: null,
};

export default LinkText;
