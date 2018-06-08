import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SmallDialog({
  title, children, buttonLabel, onClick,
}) {
  return (
    <Container>
      {title ? (
        <Title>
          <TitleText>{title}</TitleText>
        </Title>
      ) : null}
      <Content>
        <ContentText>{children}</ContentText>
      </Content>
      <ButtonContainer>
        <Button onClick={onClick}>{buttonLabel}</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ContentText = styled.p`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #333;
  border-radius: 4px;
  color: #f5f5f5;
  font-size: 16px;
  height: 44px;
  width: 150px;
`;

SmallDialog.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SmallDialog.defaultProps = {
  title: '',
  onClick: null,
};

export default SmallDialog;
