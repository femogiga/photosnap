import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';
import { Link } from 'react-router-dom';

const MainCard = () => {
  return (
    <Link to='' className='relative  text-white  '>
      <img
        src='https://images.pexels.com/photos/28884231/pexels-photo-28884231/free-photo-of-vibrant-harlequin-costume-with-dramatic-lighting.jpeg?auto=compress&cs=tinysrgb&w=600'
        className='max-h-96 w-full'
      />
      <div className='px-2 lg:px-8 py bottom-3 absolute w-full '>
        <p className='text-xl font-bold'>The Mountains</p>
        <p className='mb-4'>
          by <span>John Appleseed</span>
        </p>
        <div>
          <hr className='h-px  bg-zinc-400 border-0 dark:bg-white-700' />
        </div>

        <div className='flex justify-between items-center w-100 py-4'>
          <p>READ STORY</p>
          <p>
            <Icon icon='pajamas:long-arrow' />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MainCard;
