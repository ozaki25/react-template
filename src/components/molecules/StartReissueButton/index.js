import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function StartReissueButton({ href }) {
  return (
    <Container>
      <Link href={href}>
        <Title>利用できないキャッシュカードの再発行</Title>
        <Description>
          磁気不良、ICチップ不良、汚損、破損等で利用できなくなったキャッシュカードの再発行
        </Description>
      </Link>
    </Container>
  );
}

export const Container = styled.div`
  border: solid 1px #eee;
  box-shadow: 2px 2px 2px #bdbdbd;
  width: 300px;
  display: inline-block;
  &:active {
    opacity: 0.5;
    box-shadow: 2px 2px 2px #f5f5f5;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Title = styled.div`
  color: #212121;
  font-size: 14px;
  font-weight: bold;
  background-color: #eee;
  padding: 10px;
  text-align: left;
`;

export const Description = styled.div`
  color: #212121;
  font-size: 12px;
  padding: 10px;
  text-align: left;
`;

StartReissueButton.propTypes = {
  href: PropTypes.string,
};

StartReissueButton.defaultProps = {
  href: '#',
};

export default StartReissueButton;
