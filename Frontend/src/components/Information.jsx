import React from 'react';
import banner from '../../assets/cpc.jpg';

function Information() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold'>
            SOS Children's Village
            <span className='text-pink-500'> India</span>
          </h1>
          <p className='text-xl'>
            SOS Children’s Villages India, <span className='text-2xl font-semibold text-pink-300'>India’s largest self-implementing childcare NGO</span>, was established in 1964 aiming to break the cycle of child neglect and abandonment. We provide curative and preventive services to vulnerable children without parental care or at the risk of losing it through a value chain of quality care services that go beyond childcare alone, ensuring holistic child development.
          </p>
          <div className='mt-6'>
            <a href="https://www.soschildrensvillages.in/" target="_blank" rel="noopener noreferrer" className='bg-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 transition duration-300'>
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 mt-12 md:mt-32 h-auto md:ml-20 order-1 mx-auto md:mx-0'>
        <img src={banner} alt='Banner' className='w-full h-full object-cover rounded-lg shadow-md' />
      </div>
    </div>
  );
}

export default Information;
