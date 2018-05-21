import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  border: solid 1px #eee;
  box-shadow: 2px 2px 2px #bdbdbd;
  width: 300px;
  &:active {
    opacity: 0.5;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const Title = styled.div`
  color: #212121;
  font-size: 14px;
  font-weight: bold;
  background-color: #eee;
  padding: 10px;
`;

const Description = styled.div`
  color: #212121;
  font-size: 12px;
  padding: 10px;
`;

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

StartReissueButton.propTypes = {
  href: PropTypes.string,
};

StartReissueButton.defaultProps = {
  href: '#',
};

export default StartReissueButton;
