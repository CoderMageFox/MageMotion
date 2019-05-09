import React from 'react';
import { storiesOf } from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Icon from './Icon';

const stories = storiesOf('Icon', module);

stories.add(
  'Default Button',
  withInfo({
    inline: true,
    text: 'a normal button without any state.'
  })(() => (
    <Icon
      label={text('text', 'default')}
      className={text('className', 'defaultClassName')}
    />
  )),
);

stories.add(
  'Button Active',
  withInfo({
    inline: true,
    text: 'Button active'
  })(() => (
      <Icon
          label={text('text', 'Hello,button')}
      />
  )),
);
