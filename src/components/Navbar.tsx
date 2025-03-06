'use client';

import { useState, useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent, useSpring, motion } from 'motion/react';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';

const NAVLINKS = [
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Services',
    link: '/#services',
  },
  {
    title: 'Gallery',
    link: '/#gallery',
  },
  {
    title: 'Testimonials',
    link: '/#testimonials',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
];

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isNavbarBgTransparent, setIsNavbarBgTransparent] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useSpring(0, { damping: 20, stiffness: 300, mass: 0.2 });

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;
    setScrollDirection(diff > 0 ? 'down' : 'up');

    function hideNavbar() {
      const navHeight = navRef.current?.getBoundingClientRect().height ?? 0;
      y.set(-navHeight);
    }

    function showNavbar() {
      y.set(0);
    }

    if (scrollDirection === 'down' && current > 0) {
      hideNavbar();
    } else {
      showNavbar();
    }

    if (current > 0) {
      setIsNavbarBgTransparent(false);
    } else {
      setIsNavbarBgTransparent(true);
    }
  });

  console.log(isNavbarBgTransparent);

  return (
    <motion.nav
      style={{ y }}
      ref={navRef}
      className={cn(
        'fixed top-0 z-[100] flex h-24 w-full items-center justify-between border border-solid border-[rgba(255,255,255,0.175)] px-6 transition-colors duration-700',
        !isNavbarBgTransparent && 'bg-[rgba(145,155,120,0.35)] shadow-sm backdrop-blur-[6px]',
      )}
    >
      <Link href='/#home'>
        <Image src='/top_logo.png' alt='Aljoy digital home logo' width={598} height={171} className='w-32' priority />
      </Link>
      <ul className='flex gap-8 pr-12 text-lg font-semibold'>
        {NAVLINKS.map((nav, i) => {
          return (
            <li key={nav.title + i}>
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

// import { cn } from "@/lib/utils";
// import {
//   useScroll,
//   useMotionValueEvent,
//   useSpring,
//   motion,
// } from "motion/react";

// // Need to explicitly declare the width to prevent gibberish text animation side effect
// const NAV_LINKS = [
//   { name: "About", href: "/#about", width: "72.27px" },
//   { name: "Features", href: "/#features", width: "97.72px" },
//   {
//     name: "Architecture",
//     href: "/#architecture",
//     width: "133.8px",
//   },
//   {
//     name: "Get Involved",
//     href: "/#get_involved",
//     width: "126.25px",
//   },
//   { name: "Contact Us", href: "/contact", width: "113.8px" },
// ];

// const SOCIAL_LINKS = [
//   { href: "#", children: <DiscordLogo /> },
//   { href: "#", children: <GithubLogo /> },
//   { href: "#", children: <XLogo /> },
// ];

// export default function Navbar() {
//   const [screenHeight, setScreenHeight] = useState(1);

//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [isNavbarBgTransparent, setIsNavbarBgTransparent] = useState(true);
//   const navRef = useRef<HTMLDivElement>(null);

//   const { scrollY } = useScroll();
//   const y = useSpring(0, { damping: 20, stiffness: 300, mass: 0.2 });

//   useMotionValueEvent(scrollY, "change", (current) => {
//     const previous = scrollY.getPrevious() ?? 0;
//     const diff = current - previous;
//     setScrollDirection(diff > 0 ? "down" : "up");

//     const isScrollPosPastSecondHeader = current > screenHeight * 2;
//     function hideNavbar() {
//       const navHeight = navRef.current?.getBoundingClientRect().height ?? 0;
//       y.set(-navHeight);
//     }

//     function showNavbar() {
//       y.set(0);
//     }

//     if (!isHomePage) {
//       if (scrollDirection === "down" && current > 0) {
//         hideNavbar();
//       } else {
//         showNavbar();
//       }

//       if (current > 0) {
//         setIsNavbarBgTransparent(false);
//       } else {
//         setIsNavbarBgTransparent(true);
//       }
//     } else {
//       if (isScrollPosPastSecondHeader && scrollDirection === "down") {
//         hideNavbar();
//       } else {
//         showNavbar();
//       }

//       if (current > screenHeight) {
//         setIsNavbarBgTransparent(false);
//       } else {
//         setIsNavbarBgTransparent(true);
//       }
//     }
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenHeight(window.innerHeight);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <motion.div
//       style={{ y }}
//       ref={navRef}
//       className="fixed z-[1000] h-[8.75rem] w-full overflow-hidden pb-4 transition-opacity ease-out"
//     >
//       <nav
//         className={cn(
//           "fixed left-0 top-0 z-50 w-full text-black transition-all duration-700",
//           !isNavbarBgTransparent && "bg-black text-yellow"
//         )}
//       >
//         <InfiniteSliderLink />
//         <div className="mx-auto w-full px-4">
//           <div className="z-30 flex w-full items-center justify-between">
//             <Link title="Namada Homepage" href="/">
//               <div className="w-12 items-center gap-6 md:flex md:w-full md:max-w-[260px] xl:max-w-[220px] 2xl:max-w-[240px]">
//                 <i className="w-44">
//                   <Logo />
//                 </i>
//                 <i className="hidden md:block">
//                   {!isNavbarBgTransparent ? (
//                     <Image
//                       src="/namada-yellow.gif"
//                       alt="Namada"
//                       width={600}
//                       height={156}
//                       unoptimized
//                     />
//                   ) : (
//                     <Image
//                       src="/namada-black.gif"
//                       alt="Namada"
//                       width={600}
//                       height={156}
//                       unoptimized
//                     />
//                   )}
//                 </i>
//               </div>
//             </Link>
//             <div className="3xl:ml-16 py-8 xl:ml-14 xl:py-0">
//               <ul className="flex text-current">
//                 {NAV_LINKS.map((item, index) => (
//                   <li
//                     key={index}
//                     className="mx-4 w-max text-sm uppercase"
//                     style={{ width: item.width }}
//                   >
//                     <Link href={item.href}>
//                       <GibberishText
//                         text={item.name}
//                         containerClassName="inline-block px-3 py-10"
//                       />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <ul className="ml-auto hidden items-center xl:flex">
//               {SOCIAL_LINKS.map((item, index) => (
//                 <MagneticLink
//                   target="_blank"
//                   rel="nofollow noreferrer"
//                   containerClassName="text-2xl"
//                   href={item.href}
//                   key={index}
//                 >
//                   {item.children}
//                 </MagneticLink>
//               ))}
//               <Link
//                 title="Get Started"
//                 className="relative ml-2 flex cursor-dot items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-transparent bg-black p-4 px-4 py-2 text-center text-sm font-normal uppercase leading-4 text-yellow transition-colors duration-300 hover:bg-cyan hover:text-black active:top-0.5 2xl:px-6 2xl:py-2.5 2xl:text-base"
//                 href="#get_started"
//               >
//                 Get Started
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </motion.div>
//   );
// }
