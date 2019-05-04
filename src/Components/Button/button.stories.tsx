import React from 'react';
import { storiesOf } from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Button from './button';

const stories = storiesOf('Button', module);

stories.add(
  'Default Button',
  withInfo({
    inline: true,
    text: 'a normal button without any state.'
  })(() => (
    <Button
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
      <Button
          label={text('text', 'Hello,button')}
          isActive={boolean('active', true)}
      />
  )),
);
