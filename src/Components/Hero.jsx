import React from 'react'
import Spline from '@splinetool/react-spline';



const Hero = () => {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] '>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='max-w-xlm ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
        <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(25,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 hover:scale'>
            < i class='bxr  bx-diamond-alt'  ></i>
            INTRODUCING
          </div>
        </div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          EMAIL FOR
          <br />
          DEVELOPERS
        </h1>
        <p className='text-base sm:text-lg tracking-wider test-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem quod tempore, minus nemo qui harum quibusdam aliquid minima odit suscipit, recusandae ullam saepe ea.
        </p>

        <div className='flex gap-4 mt-12'>
          <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 bg-gray-300 text-black hover:bg-[#1a1a1a] hover:text-white' href="#">
            DOCUMENTATION
            < i class='bxr  bx-link'  ></i>
          </a>
          <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 bg-gray-300 text-black hover:bg-[#1a1a1a] hover:text-white' href="#">
            Get Started
            < i class='bxr  bx-link'  ></i>
          </a>
        </div>
      </div>
      <Spline 
      data-aos="zoom-in-back" 
      data-aos-delay="300" 
      data-aos-offset="0" 
      data-aos-duration="3000" 
      className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/yMLrV9I639gzTWLg/scene.splinecode" />
    </main>
  )
}

export default Hero