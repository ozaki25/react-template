import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationBarLink from 'src/components/atoms/NavigationBarLink';
import NavigationTitleText from 'src/components/atoms/NavigationTitleText';

function NavigationBar({ title, onClickBack, onClickForward }) {
  return (
    <Container>
      <Left>
        {onClickBack && <NavigationBarLink onClick={onClickBack}>&lt;</NavigationBarLink>}
      </Left>
      <Title>
        <NavigationTitleText>{title}</NavigationTitleText>
      </Title>
      <Right>
        {onClickForward && <NavigationBarLink onClick={onClickForward}>&gt;</NavigationBarLink>}
      </Right>
    </Container>
  );
}

export const Container = styled.nav`
  border-bottom: 3px solid #e70000;
  height: 56px;
  text-align: center;
  width: '100%';
`;

export const Left = styled.div`
  float: left;
  padding-top: 10px;
  width: 50px;
`;

export const Title = styled.div`
  float: left;
  padding-top: 15px;
  width: calc(100% - ${50 * 2}px);
`;

export const Right = styled.div`
  float: left;
  padding-top: 10px;
  width: 50px;
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
