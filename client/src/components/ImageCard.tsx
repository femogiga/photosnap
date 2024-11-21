import React from 'react';

const ImageCard = ({src}) => {
  return (

      <img
        className='max-w-full w-full  object-cover' style={{minHeight:'315px' ,maxHeight:'40rem'}}
          src={src || 'https://images.pexels.com/photos/29326301/pexels-photo-29326301/free-photo-of-night-scene-in-tokyo-s-vibrant-streets.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'}
        alt=''
      />

  );
};

export default ImageCard;
