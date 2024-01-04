import React from 'react'
import { children } from '../../assets/bootstrap/js/dist/dom/selector-engine';
import SvgIcon, { SvgIconProps } from './svg_icon.ui';



export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: SvgIconProps;
  theme?: 'primary' | 'warning' | 'white' | 'dark';
  rounded?: boolean;
  noShadow?: boolean;
  iconMode? : boolean;
}

const Button: React.FC<ButtonProps> = ({ icon,
  rounded,
  theme = 'primary',
  className,
  children,
  noShadow = false,
  iconMode = false,
  style,
  ...rest 
}) => {
  return (
    <button style={{padding : iconMode ? "10px": "10px 25px" , ...style}} className={`btn ${noShadow ? "" : "btn-shadow"} btn-${theme} ${rounded ? "btn-rounded" : ""} ${className}`} {...rest}>
      {
        icon ?
        <SvgIcon {...icon}  style={{marginRight : iconMode ? 0 : 10,...icon.style}}/> : null
      }
      {
        !iconMode &&
        <span style={{ zIndex: 10, position: 'relative' }} >{children}</span>
      }
      {
        theme == 'primary' &&
        <div className="button-pattern"></div>
      }
    </button>
  )
}

export default Button