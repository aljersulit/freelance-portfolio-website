import React from 'react';

export default function Arrow(props: { className?: string }) {
  return (
    <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='currentColor' {...props}>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9'
        ></path>
      </g>
    </svg>
  );
}
