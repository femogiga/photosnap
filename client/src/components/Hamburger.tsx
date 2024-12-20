import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = ({active,onClick}) => {

  return (
    <Link
      to=''
      onClick={onClick}
      className='px-2 relative block z-10 bg-white'>
      <div
        className={`w-7 bg-black border-2 border-slate-950 border-solid  rounded-full transition transform ease-in-out duration-300`}
        style={{
          transform: active ? 'rotate(45deg)' : 'rotate(0deg)',
          marginBottom: active ? '0rem' : '.2rem',
        }}></div>

      <div
        className={`w-7 bg-black border-2 border-slate-950 border-solid rotate-45 rounded-full transition transform ease-in-out duration-300`}
        style={{
          transform: active
            ? 'translateY(-.2rem) rotate(-45deg)'
            : 'rotate(0deg)',
        }}></div>

      <div></div>
    </Link>
  );
};

export default Hamburger;
