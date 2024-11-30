import React from 'react';
import { calculatePricing } from './../uitls/caclculatePricing';
interface IPricingCard {
  price: number;
  text: string;
  title: string;
  period: boolean;
  topBordered?: boolean;
}
const PricingCard: React.FC<IPricingCard> = ({
  price,
  text,
  title,
  period,
  topBordered,
}) => {
  return (
    <article className=''>
      <div
        className={`${topBordered ? 'pricing-card' : ''} ${
          !topBordered ? 'md:py-4' : ''
        } relative py-10  ${
          !topBordered ? 'bg-gray-100 text-slate-700' : 'bg-black text-white'
        } relative flex flex-col items-center  gap-y-8 px-10 `}>
        <p className='text-2xl'>{title || 'Pro'}</p>
        <p className='text-center'>
          {text ||
            'More advanced features available. Recommended for photography veterans and professionals.'}
          '
        </p>
        <div>
          <p className='text-5xl font-bold'>
            $<span>{calculatePricing(price, period)}</span>
          </p>
          <p className='text-center'>per {period ? 'Year' : 'Month'}</p>
        </div>

        <button
          className={`w-4/5 ${
            topBordered ? 'bg-white text-black' : 'bg-black text-white'
          } py-4`}>
          PICK PLAN
        </button>
      </div>
    </article>
  );
};

export default PricingCard;
