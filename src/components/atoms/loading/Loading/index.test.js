import React from 'react';
import { snapshot } from 'test/helpers';
import Loading from '.';

snapshot('Loading/show', <Loading show />);
snapshot('Loading/hide', <Loading />);
