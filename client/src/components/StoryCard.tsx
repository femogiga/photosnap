import React from 'react';
import ImageCard from './imageCard';
import { Link } from 'react-router-dom';
import whiteArrow from '../assets/arrow-white.svg';

const StoryCard = () => {
  return (
    <article className=''>
      <div className='relative grid  '>
        <div className='overlay absolute   inset-0 opacity-30 z-4 bg-black'></div>
        <ImageCard />
        <div className='flex flex-col gap-6 md:absolute bg-black text-white p-4 md:absolute md:bg-transparent md:text-white md:top-1/4 py-6 z-2 md:w-3/5'>
          <p>LAST MONTH'S FEATURED STORY</p>
          <h1 className='text-4xl'>HAZY FULL MOON OF APPALACHIA</h1>
          <p>March 2nd 2020 by John Appleseed</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus minus veritatis vitae omnis iure culpa accusamus
            reprehenderit quaerat sapiente ipsum. Facere voluptas commodi autem,
            nesciunt maxime atque fuga rem facilis.
          </p>
          <Link to='' className='flex gap-8 items-center'>
            {' '}
            <span>READ THE STORY</span>{' '}
            <span>
              <img src={whiteArrow} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;
