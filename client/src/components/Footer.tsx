import React from 'react';
import logo from '../assets/logo-white.svg';
import { Link, NavLink } from 'react-router-dom';
import facebook from '../assets/social/facebook-white.svg';
import twitter from '../assets/social/twitter-white.svg';
import instagram from '../assets/social/instagram-white.svg';
import youtube from '../assets/social/youtube-white.svg';
import pinterest from '../assets/social/pinterest-white.svg';
import whiteArrow from '../assets/arrow-white.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <section className=' text-white min-h-60 bg-black grid md:grid-cols-3 justify-items-center gap-8 py-8 sm:grid-cols-1'>
        <div className='flex flex-col justify-between gap-y-5'>
          <NavLink to='/'>
            <img src={logo} />
          </NavLink>
          <div className='socials flex gap-3'>
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
            <img src={instagram} alt='' />
            <img src={youtube} alt='' />
            <img src={pinterest} alt='' />
          </div>
        </div>
        <div className='flex flex-col justify-between md:justify-self-start'>
          <Link to='/'>HOME</Link>
          <Link to='/'>STORIES</Link>
          <Link to='/'>FEATURES</Link>
          <Link to='/'>PRICING</Link>
        </div>
        <div className='flex flex-col justify-between'>
          <Link
            to='/'
            className='flex items-center gap-6 mb-4 justify-center md:justify-start '>
            <span className=''>GET AN INVITE</span>
            <span>
              <img src={whiteArrow} alt='' />
            </span>
          </Link>
          <Link to='/'>Copyright 2019.All Rights Reserve</Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
