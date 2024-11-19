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
    <main className='mt-20'>
      <section className='bg-black text-white grid  md:grid-cols-12 sm:grid-cols-1'>
        <div className='order-2 md:order-1  grid-cols-1 md:col-start-1 md:col-end-5 self-center	'>
          <TextCard />
        </div>
        <div className='md:order-2 sm:order-1 sm:grid-cols-1 md:col-start-5 md:col-end-13 w-full '>
          <ImageCard />
        </div>
      </section>

      <section className='bg-white text-black grid sm:grid-cols-1 md:grid-cols-12 '>
        <div className='grid-cols-1 md:col-start-1 md:col-end-8'>
          <ImageCard
            src={
              'https://images.pexels.com/photos/29322338/pexels-photo-29322338/free-photo-of-colorful-painted-faces-and-floral-hats-portrait.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            }
          />
        </div>
        <div className='sm:grid-cols-1 md:col-start-8 md:col-end-13 self-center'>
          <TextCard />
        </div>
      </section>

      <section className='bg-white text-black grid md:grid-cols-12 sm:grid-cols-1'>
        <div className='order-1 order-2 md:col-start-1 md:col-end-5 self-center	'>
          <TextCard />
        </div>
        <div className='sm:order-2 order-1 md:col-start-5 md:col-end-13 w-full '>
          <ImageCard
            src={
              'https://images.pexels.com/photos/29339872/pexels-photo-29339872/free-photo-of-creative-outdoor-pink-art-installation.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
            }
          />
        </div>
      </section>

      <section>
        <div className='main-card-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </div>
      </section>
      <section>
        <div className='flex flex-col gap-x-8 md:flex-row items-center md:justify-around p-1'>
          <DescCard src={responsive} title={'100% Responsive'} desc={''} />
          <DescCard src={noLimit} title={'No Photo Upload Limit'} desc={''} />
          <DescCard src={embed} title={'Available to Embed'} desc={''} />
        </div>
      </section>
    </main>
  );
};

export default Home;
