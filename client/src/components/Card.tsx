import React from 'react';
import ImageCard from './imageCard';
import { Link } from 'react-router-dom';
import whiteArrow from '../assets/arrow-white.svg';

const Card = ({ src }) => {
  return (
    <article className=''>
      <div className='relative grid  '>
        <div className='overlay absolute   inset-0 opacity-30 z-4 bg-black'></div>
        <ImageCard src={src} />
        <div className='flex flex-col gap-2 md:absolute bg-black text-white p-4 md:absolute md:bg-transparent md:text-white md:bottom-4 py-0 z-2 md:w-5/5 w-full'>
          <p className='text-sm'>March 2nd 2020 </p>
          <h2 className='text-1xl font-bold'>HAZY FULL MOON OF APPALACHIA</h2>
          <p className=''> by John Appleseed</p>
          <div className='h-0.5  bg-slate-500 w-full'></div>
          <Link to='' className='flex gap-8 items-center'>
            <span className='text-xs font-bold'>READ THE STORY</span>
            <span>
              <img src={whiteArrow} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
