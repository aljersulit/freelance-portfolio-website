import React from 'react';

import { playfairDisplay, roboto } from '@/app/font';

export default function Banner() {
  return (
    <section>
      <div className='mx-auto mb-[32px] mt-[168px] h-[586px] w-[1065px] bg-[url(/g550.png)] bg-[auto_586px] bg-no-repeat'>
        <h3 className={`${playfairDisplay.className} ml-[351px] text-center text-[53px] font-normal leading-[3.4rem]`}>
          Struggling to Stand Out in the Digital Marketing World?
        </h3>
        <p
          className={`${roboto.className} ml-auto mr-2 mt-[45px] h-[202px] w-[628px] text-wrap bg-[url(/Union.png)] bg-contain bg-no-repeat pl-[53px] pt-8 text-3xl font-normal`}
        >
          Let&apos;s craft a digital presence that
          <br /> builds credibility, attracts opportunities, and drives real results!
        </p>
      </div>
    </section>
  );
}
