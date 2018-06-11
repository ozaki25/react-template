import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from 'src/components/atoms/dialogs/Dialog';

function Modal({
  title, children, buttonLabel, onClick,
}) {
  return (
    <Container>
      <DialogContainer>
        <Dialog title={title} buttonLabel={buttonLabel} onClick={onClick}>
          {children}
        </Dialog>
      </DialogContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000;
  border: none;
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0.6;
  position: fixed;
  top: 0;
  width: 100%;
`;

const DialogContainer = styled.div`
  margin-top: 70%;
  margin-left: 15px;
  margin-right: 15px;
  opacity: 1;
`;

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  title: '',
  onClick: null,
};

export default Modal;
