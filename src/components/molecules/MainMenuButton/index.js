import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MainMenuButton({ title, description, onClick }) {
  return (
    <Button onClick={onClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Button>
  );
}

export const Button = styled.button`
  border: solid 1px #eee;
  box-shadow: 2px 2px 2px #bdbdbd;
  width: 300px;
  display: inline-block;
  &:active {
    opacity: 0.5;
    box-shadow: 2px 2px 2px #f5f5f5;
  }
`;

export const Title = styled.p`
  background-color: #eee;
  color: #212121;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  text-align: left;
`;

export const Description = styled.p`
  color: #212121;
  font-size: 12px;
  padding: 10px;
  text-align: left;
`;

MainMenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MainMenuButton;
