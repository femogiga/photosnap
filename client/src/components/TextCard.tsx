import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';

const TextCard = () => {
  return (
    <div className='max-w-100  grid  place-items-center sm:px-2 px-4 py-4'>
      <div className='grid gap-3 px-3 min-h-full '>
        <p className='text-3xl'>
          CREATE AND SHARE <br></br>YOUR PHOTOS STORIES
        </p>
        <p style={{ maxWidth: '' }} className='mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo et
          placeat similique provident ipsum blanditiis necessitatibus quis
        </p>
        <div className='flex items-center gap-2'>
          <p>GET AN INVITE</p>
          <Icon icon='pajamas:long-arrow' />
        </div>
      </div>
    </div>
  );
};

export default TextCard;
