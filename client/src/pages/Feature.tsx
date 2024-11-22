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

const Feature = () => {
  return (
    <Container>
      <section className='relative bg-black text-white grid  md:grid-cols-12 sm:grid-cols-1 grid-rows-2 md:grid-rows-1'>
        <div className=' order-2 grid md:order-1  grid-cols-1 md:col-start-1 md:col-end-5 self-center	'>
          <TextCard
            heading={'FEATURES'}
            text={
              'We make sure all our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories'
            }
          />
          <TextCardIndicator />
        </div>
        <div className='md:order-2 sm:order-1 sm:grid-cols-1 md:col-start-5 md:col-end-13 w-full img-card-cont'>
          <ImageCard
            src={
              'https://images.pexels.com/photos/1601774/pexels-photo-1601774.jpeg?auto=compress&cs=tinysrgb&w=1200'
            }
          />
        </div>
      </section>
      <section>
        <div className='flex flex-col gap-x-8 md:flex-row items-center md:justify-around p-1 flex-wrap'>
          <DescCard src={responsive} title={'100% Responsive'} desc={''} />
          <DescCard src={noLimit} title={'No Photo Upload Limit'} desc={''} />
          <DescCard src={embed} title={'Available to Embed'} desc={''} />
          <DescCard src={domain} title={'Custom Domain'} desc={''} />
          <DescCard src={boost} title={'No Photo Upload Limit'} desc={''} />
          <DescCard src={dragDrop} title={'Drag and Drop Image'} desc={''} />
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

export default Feature;
