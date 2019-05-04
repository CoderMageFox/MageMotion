import React, {CSSProperties} from 'react';
import './button.scss';
import cls from 'classnames';
interface IButton {
  /**
   * label for the button
   */
  label: string;
  /**
   * className for the button
   */
  className?: string;
  /**
   * CustomStyle for the button
   */
  style?: CSSProperties ;
  /**
   * Active state for the button
   */
  isActive?: boolean;
}
export default class Button extends React.Component<IButton> {

  public render() {
   const {label, className, isActive, style} = this.props;
   return (
    <div className={cls(
        'button',
        className ? className : '',
        isActive ? 'button-active' : 'button-default',
        )} style={style}>
      {label}
    </div>
  );
  }
}
