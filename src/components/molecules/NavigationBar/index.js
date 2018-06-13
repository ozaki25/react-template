import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'src/constants/Color';

const NavigationBar = ({ title, onClickBack, onClickForward }) => (
  <Container>
    <Left>{onClickBack && <Link onClick={onClickBack}>&lt;</Link>}</Left>
    <Title>
      <TitleText>{title}</TitleText>
    </Title>
    <Right>{onClickForward && <Link onClick={onClickForward}>&gt;</Link>}</Right>
  </Container>
);

const Container = styled.nav`
  border-bottom: 3px solid ${Color.brand};
  height: 56px;
  text-align: center;
  width: '100%';
`;

const Left = styled.div`
  float: left;
  padding-top: 10px;
  width: 50px;
`;

const Title = styled.div`
  float: left;
  padding-top: 15px;
  width: calc(100% - ${50 * 2}px);
`;

const Right = styled.div`
  float: left;
  padding-top: 10px;
  width: 50px;
`;

const TitleText = styled.p`
  color: ${Color.text};
  font-size: 18px;
  font-weight: bold;
`;

const Link = styled.button`
  color: ${Color.brand};
  font-size: 30px;
`;

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  onClickBack: PropTypes.func,
  onClickForward: PropTypes.func,
};

NavigationBar.defaultProps = {
  onClickBack: null,
  onClickForward: null,
};

export default NavigationBar;
