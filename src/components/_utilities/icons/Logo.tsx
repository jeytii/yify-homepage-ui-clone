import React from 'react';
import type { SVGAttributes } from 'react';

function Logo({ width, height, ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='20' cy='20' r='20' fill='black' />
      <path
        d='M10.2 22.9055H15.7891V28.6L12.8548 25.525L10.2 22.9055Z'
        fill='white'
      />
      <path
        d='M22.4961 15.3889H25.8496V22.9056L22.4961 28.6V15.3889Z'
        fill='white'
      />
      <path
        d='M17.4658 12.2H20.3722H25.9055H30.1999L25.8496 15.6166H17.4658V13.9083V12.2Z'
        fill='white'
      />
      <rect
        x='17.4658'
        y='15.5028'
        width='3.35352'
        height='13.0972'
        fill='white'
      />
      <path d='M10.2 15.6986L15.7221 12.2V15.6986H10.2Z' fill='white' />
    </svg>
  );
}

Logo.defaultProps = {
  width: '40',
  height: '40',
};

export default Logo;
