import React, { useEffect, useState } from 'react';
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
import check from '../assets/check.svg';

import { Link } from 'react-router-dom';
import Overlay from '../components/Overlay';
import PricingCard from '../components/PricingCard';
import PeriodSelector from '../components/PeriodSelector';

const Pricing = () => {
  const [period, setPeriod] = useState(false);
  useEffect(() => {}, [period]);
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
        <PeriodSelector
          onChange={(e) => {
            console.log(e.target.checked);
            setPeriod(e.target.checked);
          }}
          period={period}
        />
      </section>

      <section className='mb-20'>
        <div className='grid grid-cols-1 justify-items-center items-center md:grid-cols-3  gap-x-16 py-6'>
          <PricingCard
            text={
              'Includes basic usage of our platform. Recommended for new and aspiring photographers.'
            }
            price={19}
            title={'Basic'}
            period={period}
          />

          <PricingCard
            text={
              'More advanced features available. Recommended for photography veterans and professionals.'
            }
            price={39}
            title={'Pro'}
            period={period}
            topBordered
          />

          <PricingCard
            text={
              'Additional features available such as more detailed metrics. Recommended for business owners.'
            }
            price={99}
            title={'Business'}
            period={period}
          />
        </div>
      </section>

      <section className='mb-20'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-center text-4xl font-bold'>COMPARE</h2>
          <table className='text-black w-6/6 md:w-3/6 max-w-2xl font-bold text-xs'>
            <tbody>
              <tr className=''>
                <th scope='col' className='text-start'>
                  THE FEATURES
                </th>
                <th scope='col' className=''>
                  BASIC
                </th>
                <th scope='col' className=''>
                  PRO
                </th>
                <th scope='col' className=''>
                  BUSINESS
                </th>
              </tr>
              <tr className=''>
                <td>UNLIMITED STORY POSTING</td>
                <td className=''>
                  <img src={check} className='mx-auto my-auto  ' />
                </td>
                <td>
                  <img src={check} className='mx-auto my-auto ' />
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>

              <tr className=''>
                <td>UNLIMITED PHOTO UPLOAD</td>
                <td className=''>
                  <img src={check} className='mx-auto my-auto  ' />
                </td>
                <td>
                  <img src={check} className='mx-auto my-auto ' />
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>

              <tr className=''>
                <td>EMBEDDING CUSTOM CONTENT</td>
                <td className=''>
                  {/* <img src={check} className='mx-auto my-auto  ' /> */}
                </td>
                <td>
                  <img src={check} className='mx-auto my-auto ' />
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>
              <tr className=''>
                <td>CUSTOMIZE METADATA</td>
                <td className=''>
                  {/* <img src={check} className='mx-auto my-auto  ' /> */}
                </td>
                <td>
                  <img src={check} className='mx-auto my-auto ' />
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>
              <tr className=''>
                <td>ADVANCED METRICS</td>
                <td className=''>
                  {/* <img src={check} className='mx-auto my-auto  ' /> */}
                </td>
                <td>
                  {/* <img src={check} className='mx-auto my-auto ' /> */}
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>
              <tr className=''>
                <td>PHOTO DOWNLOADS</td>
                <td className=''>
                  {/* <img src={check} className='mx-auto my-auto  ' /> */}
                </td>
                <td>
                  {/* <img src={check} className='mx-auto my-auto ' /> */}
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>
              <tr className=''>
                <td>SEARCH ENGINE INDEXING</td>
                <td className=''>
                  {/* <img src={check} className='mx-auto my-auto  ' /> */}
                </td>
                <td>
                  {/* <img src={check} className='mx-auto my-auto ' /> */}
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>
              <tr className=''>
                <td>CUSTOM ANALYTICS</td>
                <td className=''>
                  {/* <img src={check} className='mx-auto my-auto  ' /> */}
                </td>
                <td>
                  {/* <img src={check} className='mx-auto my-auto ' /> */}
                </td>
                <td>
                  <img src={check} className=' mx-auto my-auto ' />
                </td>
              </tr>
            </tbody>
          </table>
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
