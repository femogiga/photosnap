import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';

const TextCard = () => {
  return (
    <div className='max-w-100 grid  place-items-center px-2 '>
      <div className='grid gap-3'>
        <p className='text-3xl' style={{ width: '15ch' }}>
          CREATE AND SHARE YOUR PHOTOS STORIES
        </p>
        <p style={{ maxWidth: '50ch' }} className='mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo et
          placeat similique provident ipsum blanditiis necessitatibus quis
          accusantium debitis commodi explicabo veritatis eius, dignissimos cum
          eveniet, laborum architecto? Nemo, non
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
