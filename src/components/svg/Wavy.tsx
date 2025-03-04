import React from 'react';

export default function Wavy(props: { className?: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' {...props}>
      <path
        fill='#f0eee8'
        fillOpacity='1'
        d='M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,234.7C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
      ></path>
    </svg>
  );
}
