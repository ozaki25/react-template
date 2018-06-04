import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loading = ({ show }) => <Container show={show} />;

const Container = styled.div`
  background-color: #000;
  border: none;
  cursor: wait;
  display: ${props => (props.show ? 'inherit' : 'none')};
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0.6;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

Loading.propTypes = {
  show: PropTypes.bool,
};

Loading.defaultProps = {
  show: false,
};

export default Loading;
