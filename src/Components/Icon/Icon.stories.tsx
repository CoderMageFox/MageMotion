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
      Icon={Object(<img src='../../../static/Icon/computer.png'/>)}
    />
  )),
);
