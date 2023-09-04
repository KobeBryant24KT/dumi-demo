import React, { FC } from 'react';

export type ButtonProps = {
  /** 自定义内容
   * @default -
   */
  children?: React.ReactNode;
  /** 是否禁用
   * @default false
   * */
  disabled?: boolean;
  /** 按钮图标
   * @default -
   * */
  icon?: string | React.ReactNode;
  /** 加载中状态
   * @default false
   * */
  loading?: boolean;
  /** 按钮形状
   *  @default 'default'
   * */
  shape?: 'default' | 'circle' | 'round';
  /** 按钮大小
   * @default 'middle'
   * */
  size?: 'large' | 'middle' | 'small';
  /** 按钮类型
   * @default 'default'
   */
  theme?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
}

const Button: FC<ButtonProps> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};

export default Button;
