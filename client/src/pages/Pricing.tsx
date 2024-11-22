import React from 'react';
import Container from '../components/Container';
import TextCard from '../components/TextCard';
import TextCardIndicator from '../components/TextCardIndicator';
import ImageCard from '../components/imageCard';
import DescCard from '../components/DescCard';
import noLimit from '../assets/no-limit.svg';
import responsive from '../assets/responsive.svg';
import embed from '../assets/embed.svg';
import boost from '../assets/boost-exposure.svg';
import domain from '../assets/custom-domain.svg';
import dragDrop from '../assets/drag-drop.svg';
import whiteArrow from '../assets/arrow-white.svg';

import { Link } from 'react-router-dom';
import Overlay from '../components/Overlay';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  return (
    <Container>
      <section className='relative bg-black text-white grid  md:grid-cols-12 sm:grid-cols-1 grid-rows-2 md:grid-rows-1'>
        <div className=' order-2 grid md:order-1  grid-cols-1 md:col-start-1 md:col-end-5 self-center	'>
          <TextCard
            heading={'PRICING'}
            text={
              'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
            }
          />
          <TextCardIndicator />
        </div>
        <div className='md:order-2 sm:order-1 sm:grid-cols-1 md:col-start-5 md:col-end-13 w-full img-card-cont'>
          <ImageCard
            src={
              'https://images.pexels.com/photos/7563555/pexels-photo-7563555.jpeg?auto=compress&cs=tinysrgb&w=1200'
            }
          />
        </div>
      </section>

      <section>
        <form className='flex justify-center gap-16 py-12 items-center font-bold'>
          <label htmlFor='monthly1'>Monthly</label>
          <span className='relative '>
            <input
              type='checkbox'
              name='pricing'
              id='pricing'
              className='hidden'
            />

            <label
              htmlFor='pricing'
              className='block tunnel border border-solid border-black	rounded-3xl w-24  top-30 left-0 bg-black'>
              <div className='circle bg-white w-10 aspect-square rounded-full'></div>
            </label>
          </span>
          <label htmlFor='yearly1'>Yearly</label>
        </form>
      </section>

      <section>
        <div className='grid grid-cols-1 justify-items-center items-center md:grid-cols-3 '>
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </section>

      <section>
        <div className='relative'>
          <div className='max-h-80'>
            <Overlay />
            <ImageCard src='https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&w=1200' />
          </div>
          <div className='absolute text-white z-3 top-2/4 bottom-2/4 left-0 px-6 flex  justify-around gap-4 w-full flex-col items-start md:flex-row md:items-center md:px- '>
            <p className='text-3xl font-bold '>
              WE'RE IN BETA.GET <br /> YOUR INVITE TODAY
            </p>
            <Link to='' className='flex gap-x-8 items-center  '>
              <span className='text-xs font-bold py-2'>READ THE STORY</span>
              <span>
                <img src={whiteArrow} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Pricing;
