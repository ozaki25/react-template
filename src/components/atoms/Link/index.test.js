import React from 'react';
import { snapshot } from '../../../../test/helpers';
import Link, { LinkText } from './';

snapshot('Link', <Link href="http://google.com">リンク</Link>);
snapshot('Link/LinkText', <LinkText>リンク</LinkText>);
