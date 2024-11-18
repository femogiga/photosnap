import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import logo from '../assets/logo.svg';

// import logo from '../assets/logo-white.svg'

const Header = () => {
  return (
    <header>
      <nav
        className='grid grid-cols-3	justify-items-center items-center font-bold py-8'
        style={{ border: '1px solid black' }}>
        <NavLink to='/'>
          {/* <div className='flex items-center gap-x-4 '>
            <Icon icon='emojione-v1:red-triangle-pointed-up' />
            <h1 className='text-3xl'>PHOTOSNAP</h1>
          </div> */}
          <img src={logo} />
        </NavLink>
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
