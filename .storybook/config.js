import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot';

addDecorator(withKnobs);
addDecorator(initScreenshot());
addDecorator(
  withScreenshot({
    viewport: [
      {
        width: 320,
        height: 480,
        isMobile: true,
        hasTouch: true,
      },
      {
        width: 414,
        height: 736,
        isMobile: true,
        hasTouch: true,
      },
    ],
  }),
);

const req = require.context('src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
