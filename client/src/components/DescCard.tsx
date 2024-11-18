import React from 'react';

const DescCard = ({ desc, title, src }) => {
  return (
    <article className='md:w-1/4 px-2 flex flex-col justify-center items-center py-20 gap-3 max-h-96'>
      <img src={src} className='py-3' />
      <p className='font-bold'>{title || 'No Photo Upload Limit'}</p>
      <p className='text-center text-gray-500'>
        {desc ||
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,simil soluta debitis dolorem ex voluptate, nulla ut errorvoluptatem, ad illo?'}
      </p>
    </article>
  );
};

export default DescCard;
