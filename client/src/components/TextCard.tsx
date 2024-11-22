import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';

interface ITextCard {
  heading: string;
  text: string;
}
const TextCard: React.FC<ITextCard> = ({ heading, text }) => {
  return (
    <div className='max-w-100  grid  place-items-center sm:px-2 px-4 py-4'>
      <div className='grid gap-3 px-3 min-h-full px-4'>
        <p className='text-3xl '>
          {heading ||(<><span>CREATE AND SHARE</span><br/>  YOUR PHOTOS STORIES</>)}
        </p>
        <p style={{ maxWidth: '' }} className='mb-4'>
          {text ||'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo etplaceat similique provident ipsum blanditiis necessitatibus quis'}
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
