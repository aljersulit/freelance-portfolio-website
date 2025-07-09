import React, { SVGProps } from 'react';

export default function FlippedWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' fill='currentColor' {...props}>
      <path
        fillOpacity='1'
        d='M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,117.3C672,139,768,181,864,202.7C960,224,1056,224,1152,186.7C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
      ></path>
    </svg>
  );
}
