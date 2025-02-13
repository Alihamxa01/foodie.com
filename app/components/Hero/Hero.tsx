import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        id="home" 
        className="flex flex-col h-screen text-center md:text-left text-5xl md:text-7xl font-extrabold justify-center items-center md:items-start px-6 md:px-16"
      >
        <h1 className="font-serif leading-tight">
          <span className="text-red-600">GOOD FOOD,</span>
          <br />
          GOOD MOOD!
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold font-mono mt-4 text-orange-600">MR. FOODIE</h2>
        
        <div className="relative w-full flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/img2.png"
            width={500}
            height={600}
            alt="PHOTO"
            className="w-5/6 md:w-1/2 lg:w-1/3 h-auto absolute right-0 top-32 md:static"
          />
        </div>
      </section>
    </div>
  );
}
