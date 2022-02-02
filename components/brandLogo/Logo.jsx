import React from 'react';
import {FaHandshake} from 'react-icons/fa'

const Logo = () => {
  return (
    <div className='flex items-center justify-center bg-cta w-32 h-12 rounded-md'>
    <FaHandshake className='text-logo text-4xl font-bold'/>
    <span className='text-2xl italic text-body ml-1 font-bold'>get-job</span>
    </div>
  );
};

export default Logo;
