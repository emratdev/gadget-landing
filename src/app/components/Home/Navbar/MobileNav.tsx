import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/app/constant/constant'
import { CgClose } from 'react-icons/cg';

type Props = { 
    showNav: boolean;
    closeNav: () => void;

}

const MobileNav = ({closeNav,showNav}:Props) => {
    const navOpen = showNav ? 'translate-x-0' : '-translate-x-full';
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full
        h-screen`}
      ></div>
      {/* navLinks */}
      <div
        className={`text-white ${navOpen} fixed flex justify-center flex-col h-full transform transition-all duration-500 delay-300
        w-[80%] sm:w[60%] bg-pink-600 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] cursor-pointer right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
}

export default MobileNav