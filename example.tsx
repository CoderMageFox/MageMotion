import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './lib';

const div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render((
  <div>
    <Test name="alipay"/>
  </div>
), div);
