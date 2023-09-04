/**
 * title: 按钮类型
 * description: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
*/

import React from 'react';
import { Button } from 'tita-design';

const App: React.FC = () => (
  <>
    <Button theme="dashed">Primary Button</Button>
    <Button>Default Button</Button>
    <Button theme='default'>Dashed Button</Button>
    <Button theme='default'>Text Button</Button>
    <Button>Link Button</Button>
  </>
);

export default App;
