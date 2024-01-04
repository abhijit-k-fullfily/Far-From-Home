import React from 'react'

export interface SvgIconProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  size? : number,
}

const SvgIcon:React.FC<SvgIconProps> = ({
  size = 20,
  ...rest
}) => {
  return (
    <img style={{
      height : size,
      width : size,
      objectFit : 'contain'
    }} 
    {...rest}
    />
  )
}

export default SvgIcon