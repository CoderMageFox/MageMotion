import React, {CSSProperties} from 'react';
import './Icon.scss';
import cls from 'classnames';

interface IIconProps {
  /**
   * label for the button
   */
  Icon: any;

}
const Icon: React.FunctionComponent<IIconProps> = (props) => {
    return (
        <span>
            {props.Icon}
        </span>
    );
};

export default Icon;
