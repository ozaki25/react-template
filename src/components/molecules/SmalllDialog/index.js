import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BasicButton from 'src/components/atoms/buttons/BasicButton';
import BasicText from 'src/components/atoms/texts/BasicText';

function SmallDialog({
  title, children, buttonLabel, onClick,
}) {
  return (
    <Container>
      {title ? (
        <Title>
          <BasicText emphasis>{title}</BasicText>
        </Title>
      ) : null}
      <Content>
        <BasicText>{children}</BasicText>
      </Content>
      <ButtonContainer>
        <BasicButton xsmall onClick={onClick}>
          {buttonLabel}
        </BasicButton>
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

const Content = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
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
