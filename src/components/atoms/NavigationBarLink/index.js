import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function NavigationBarLink({ children, onClick }) {
  return <Link onClick={onClick}>{children}</Link>;
}

export const Link = Button.extend`
  font-size: 30px;
  color: #e70000;
`;

NavigationBarLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

NavigationBarLink.defaultProps = {
  onClick: null,
  children: null,
};

export default NavigationBarLink;
