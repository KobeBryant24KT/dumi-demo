import React, { FC } from 'react';

export type ButtonProps = {
  /**
   * 自定义内容
   */
  children?: React.ReactNode;
  /** 按钮大小
   * @default 'middle'
   * */
  size?: 'large' | 'middle' | 'small';
  /**
   * 按钮类型
   * @default 'default'
   */
  theme?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
}

const Button: FC<ButtonProps> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};

export default Button;
