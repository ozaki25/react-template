import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BasicButton from 'src/components/atoms/buttons/BasicButton';
import BasicText from 'src/components/atoms/texts/BasicText';

const SmallDialog = ({
  title, children, buttonLabel, onClick, show,
}) =>
  (show ? (
    <Container>
      <DialogContainer>
        <Dialog>
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
        </Dialog>
      </DialogContainer>
    </Container>
  ) : null);

const Container = styled.div`
  background-color: #0009;
  height: 100%;
  left: 0;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const DialogContainer = styled.div`
  left: 0;
  margin-left: 15px;
  margin-right: 15px;
  position: fixed;
  right: 0;
  top: 35%;
`;

const Dialog = styled.div`
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
  show: PropTypes.bool,
};

SmallDialog.defaultProps = {
  title: '',
  onClick: null,
  show: true,
};

export default SmallDialog;
