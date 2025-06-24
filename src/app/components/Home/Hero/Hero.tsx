import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col bg-pink-800 bg_clip">
      <div className="w-[90%] md-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-40">
        {/* Text Context */}
        <div>
          <h1 className='text-3xl md:text-4xl text-white lg:text-5xl mt-6 mb-6 font-bold leading-[2.5rem]
          md:leading-[3.5rem]'>Superior sound, tangible quality</h1>
          <p>
            Sit back, relax and prepare to experience a new level of audio
            excellence. These headphones combine cutting-edge technology with
            the finest craftsmanship, for the ultimate listening experience.
          </p>
          <div>
            <button>Buy Now</button>
            <button>Explore More</button>
          </div>
        </div>
        {/* Image Context */} 
        <div></div>
        
      </div>
    </div>
  );
}

export default Hero