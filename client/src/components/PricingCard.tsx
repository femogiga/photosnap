import React from 'react';

const PricingCard = () => {
  return (
    <article className='   '>
      <div className='pricing-card relative py-10 border bg-black text-white relative flex flex-col items-center  gap-y-16 px-10 '>
        <p className='text-2xl'>Pro</p>
        <p className='text-center'>
          More advanced features available. Recommended for photography veterans
          and professionals.
        </p>
        <div>
          <p className='text-5xl font-bold'>
            $<span>{(39.0).toFixed(2)}</span>
          </p>
          <p className='text-center'>per {'isChecked' ? 'Year' : 'Month'}</p>
        </div>

        <button className=' w-full bg-white text-black py-5'>PICK PLAN</button>
      </div>
    </article>
  );
};

export default PricingCard;
