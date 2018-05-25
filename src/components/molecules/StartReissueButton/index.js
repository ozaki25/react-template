import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function StartReissueButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <Title>利用できないキャッシュカードの再発行</Title>
      <Description>
        磁気不良、ICチップ不良、汚損、破損等で利用できなくなったキャッシュカードの再発行
      </Description>
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
  color: #212121;
  font-size: 14px;
  font-weight: bold;
  background-color: #eee;
  padding: 10px;
  text-align: left;
`;

export const Description = styled.p`
  color: #212121;
  font-size: 12px;
  padding: 10px;
  text-align: left;
`;

StartReissueButton.propTypes = {
  onClick: PropTypes.func,
};

StartReissueButton.defaultProps = {
  onClick: null,
};

export default StartReissueButton;
