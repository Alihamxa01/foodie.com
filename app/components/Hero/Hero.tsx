import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-orange-300 text-white">
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative flex flex-col md:flex-row h-full w-full text-center md:text-left px-6 md:px-16"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Taste the <span className="text-red-700">Best</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-700">Experience delicious flavors with every bite.</p>
          <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
            Order Now
          </button>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-3/4 md:w-full max-w-sm md:max-w-lg">
            <Image
              src="/img2.png"
              width={500}
              height={600}
              alt="Food Image"
              className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
