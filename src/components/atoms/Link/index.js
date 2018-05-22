import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Link({ href, children }) {
  return <LinkText href={href}>{children}</LinkText>;
}

export const LinkText = styled.a`
  color: #666;
  font-size: 16px;
  text-decoration: underline;
  &:active {
    opacity: 0.5;
  }
`;

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  href: '#',
};

export default Link;
