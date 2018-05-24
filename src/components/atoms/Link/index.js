import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function Link({ children, onClick }) {
  return <LinkText onClick={onClick}>{children}</LinkText>;
}

export const LinkText = Button.extend`
  color: #666;
  font-size: 16px;
`;

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  onClick: null,
};

export default Link;
