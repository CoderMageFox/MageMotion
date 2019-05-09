import React, {CSSProperties} from 'react';
import './Icon.scss';
import cls from 'classnames';
interface IIcon {
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
}
export default class Icon extends React.Component<IIcon> {

  public render() {
   const {label, className, style} = this.props;
   return (
    <div className={cls(
        'button',
        className ? className : '',
        )} style={style}>
      {label}
    </div>
  );
  }
}
