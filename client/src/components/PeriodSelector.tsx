import React from 'react'
interface IPricingSelector{
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    period: boolean

}
const PeriodSelector:React.FC<IPricingSelector> = ({onChange,period}) => {
  return (
    <form className='flex justify-center gap-16 py-8 items-center font-bold'>
      <label
        htmlFor='monthly1'
        style={{ color: !period ? 'rgba(0,0,0,0.7)' : 'black' }}>
        Monthly
      </label>
      <span className='relative '>
        <input
          type='checkbox'
          name='pricing'
          id='pricing'
          className='hidden'
          onChange={onChange}
        />

        <label
          htmlFor='pricing'
          className='block tunnel  border-solid border-black	rounded-3xl w-24  top-30 left-0 bg-black'>
          <div className='circle bg-white w-10 aspect-square rounded-full'></div>
        </label>
      </span>
      <label
        htmlFor='yearly1'
        style={{ color: period ? 'rgba(0,0,0,0.5)' : 'black' }}>
        Yearly
      </label>
    </form>
  );
}

export default PeriodSelector
