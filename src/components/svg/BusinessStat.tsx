import React from 'react';

export default function BusinessStat(props: { className?: string }) {
  return (
    <svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle cx='35.625' cy='9.375' r='5.625' stroke='#F6F6F6' strokeWidth='1.5' />
      <path
        d='M13.125 26.25L17.4242 21.9508C18.1564 21.2186 19.3436 21.2186 20.0758 21.9508L23.0492 24.9242C23.7814 25.6564 24.9686 25.6564 25.7008 24.9242L31.875 18.75M31.875 18.75V23.4375M31.875 18.75H27.1875'
        stroke='#F6F6F6'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M41.25 19.6875V22.5C41.25 31.3388 41.25 35.7583 38.5041 38.5041C35.7583 41.25 31.3388 41.25 22.5 41.25C13.6612 41.25 9.24175 41.25 6.49587 38.5041C3.75 35.7583 3.75 31.3388 3.75 22.5C3.75 20.3844 3.75 18.5219 3.78766 16.875M25.3125 3.75H22.5C13.6612 3.75 9.24175 3.75 6.49587 6.49587C5.66916 7.32259 5.09135 8.30101 4.6875 9.50606'
        stroke='#F6F6F6'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
}
