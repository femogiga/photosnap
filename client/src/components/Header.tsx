import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import logo from '../assets/logo.svg';
import Hamburger from './Hamburger';

// import logo from '../assets/logo-white.svg'

const Header = () => {
  return (
    <header>
      <nav
        className='grid grid-cols-3 	md:justify-items-center items-center font-bold py-8 '
        style={{ border: '1px solid black' }}>
        <NavLink to='/'>
          <img src={logo} />
        </NavLink>
        <div className='sm:block md:hidden col-span-2	justify-self-end '><Hamburger/></div>
        <div
          className='justify-between gap-10 items-center min-h-full	hidden md:flex'
          style={{ border: '1px solid black' }}>
          <NavLink to='stories'>STORIES</NavLink>
          <NavLink to='features'>FEATURES</NavLink>
          <NavLink to='pricing'>PRICING</NavLink>
        </div>
        <NavLink
          to='invite'
          className={
            'px-4 py-2 bg-black text-white  hover:bg-sky-700 hidden md:block'
          }>
          GET AN INVITE
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
