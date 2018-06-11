import React from 'react';
import { snapshot } from 'test/helpers';
import Modal from '.';

const props = {
  title: 'タイトル',
  onClick: jest.fn(),
  buttonLabel: 'OK',
  children: 'コンテンツ',
};

snapshot('Modal', <Modal {...props} />);
