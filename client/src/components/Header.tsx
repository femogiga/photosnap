import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import logo from '../assets/logo.svg';
import Hamburger from './Hamburger';

// import logo from '../assets/logo-white.svg'

const Header = () => {
  const [active, setActive] = useState(false);
  const angle = '45';

  useEffect(() => {}, [active, angle]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(angle);
    setActive((active) => !active);
  };
  return (
    <header className='header z-10 bg-white linkgroup '>
      <nav className='  grid grid-cols-1 md:grid-cols-3 gap-y-4 	 items-center font-bold py-8 px-8  '>
        <section className='flex items-center justify-between'>
          <NavLink to='/'>
            <img src={logo} />
          </NavLink>
          <div className='sm:block md:hidden col-span-2	justify-self-end '>
            <Hamburger onClick={handleClick} active={active} />
          </div>
        </section>
        <section
          className={`${
            !active ? 'hidden' : 'md:flex'
          } md:flex md:col-span-2 	md:justify-between   gap-x-4`}>
          <div className=' flex flex-col md:flex-row justify-end md:justify-between gap-y-8 md:gap-x-4 items-center min-h-full mb-4	md:mb-0 md:w-3/6 '>
            <NavLink to='stories'>STORIES</NavLink>
            <NavLink to='features'>FEATURES</NavLink>
            <NavLink to='pricing'>PRICING</NavLink>
          </div>

          <NavLink
            to='invite'
            className={
              'px-4 py-2 bg-black text-white  hover:bg-sky-700 flex justify-center md:block  justify-self-center w-full md:max-w-60 text-center	'
            }>
            GET AN INVITE
          </NavLink>
        </section>
      </nav>
    </header>
  );
};

export default Header;
