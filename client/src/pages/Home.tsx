import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';
import TextCard from '../components/TextCard';
import ImageCard from '../components/imageCard';
import MainCard from '../components/MainCard';
import noLimit from '../assets/no-limit.svg';
import responsive from '../assets/responsive.svg';
import embed from '../assets/embed.svg';
import DescCard from '../components/DescCard';

const Home = () => {
  return (
    <main>
      <section className='bg-black text-white grid grid-cols-12'>
        <div className='col-start-1 col-end-5 self-center	'>
          <TextCard />
        </div>
        <div className='col-start-5 col-end-13 w-full '>
          <ImageCard />
        </div>
      </section>

      <section className='bg-white text-black grid grid-cols-12 '>
        <div className='col-start-1 col-end-8'>
          <ImageCard
            src={
              'https://images.pexels.com/photos/29322338/pexels-photo-29322338/free-photo-of-colorful-painted-faces-and-floral-hats-portrait.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            }
          />
        </div>
        <div className='col-start-8 col-end-13 self-center'>
          <TextCard />
        </div>
      </section>
      <section className='bg-white text-black grid grid-cols-12'>
        <div className='col-start-1 col-end-5 self-center	'>
          <TextCard />
        </div>
        <div className='col-start-5 col-end-13 w-full '>
          <ImageCard
            src={
              'https://images.pexels.com/photos/29339872/pexels-photo-29339872/free-photo-of-creative-outdoor-pink-art-installation.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            }
          />
        </div>
      </section>
      <section>
        <div className='main-card-container grid grid-cols-4'>
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </div>
      </section>
      <section>
        <div className='flex justify-around'>
          <DescCard src={responsive} title={'100% Responsive'} desc={''} />
          <DescCard src={noLimit} title={'No Photo Upload Limit'} desc={''} />
          <DescCard src={embed} title={'Available to Embed'} desc={''} />
        </div>
      </section>
    </main>
  );
};

export default Home;
