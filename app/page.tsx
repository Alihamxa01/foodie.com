import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Image from 'next/image';


function Page() {
  return (
    <div>
      <Header />
<Hero/>
      

      {/* Food Images Section */}
      <section id="food" className="bg-gradient-to-tr to-orange-400 from-orange-600 max-h-max border-t-8 rounded-xl border-orange-800 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-center">
            <Image
              src="/img3.jpg" // Added leading slash
              alt="photo"
              width={300}
              height={400}
              className="hover:scale-110 duration-100 h-80 object-cover border-8 border-orange-800 rounded-lg mx-auto mb-4"
            />
            <p className="text-lg font-bold">ZINGER-BURGER WITH LOADED FRIES</p>
          </div>

          <div className="text-center">
            <Image
              src="/p1.jpg" // Added leading slash
              alt="photo"
              width={300}
              height={400}
              className="hover:scale-110 duration-100 h-80 object-cover border-8 border-orange-800 rounded-lg mx-auto mb-4"
            />
            <p className="text-lg font-bold">SHASHLIK STICKS</p>
          </div>

          <div className="text-center">
            <Image
              src="/p2.jpg" // Added leading slash
              alt="photo"
              width={300}
              height={400}
              className="hover:scale-110 duration-100 h-80 object-cover border-8 border-orange-800 rounded-lg mx-auto mb-4"
            />
            <p className="text-lg font-bold">CHICKEN KABAB PLATTER</p>
          </div>

          <div className="text-center">
            <Image
              src="/p3.jpg" // Added leading slash
              alt="photo"
              width={300}
              height={400}
              className="hover:scale-110 duration-100 h-80 object-cover border-8 border-orange-800 rounded-lg mx-auto mb-4"
            />
            <p className="text-lg font-bold">SPECIAL CHAPLI KABAB</p>
          </div>

          <div className="text-center">
            <Image
              src="/p4.jpg" // Added leading slash
              alt="photo"
              width={300}
              height={400}
              className="hover:scale-110 duration-300 ease-in-out h-80 object-cover border-8 border-orange-800 rounded-lg mx-auto mb-4"
            />
            <p className="text-lg font-bold">Classic Chicken Karahi:<br /> A Spicy Delight with Soft Naan</p>
          </div>

          <div className="text-center">
            <Image
              src="/p5.jpg" // Added leading slash
              alt="photo"
              width={300}
              height={400}
              className="hover:scale-110 duration-100 h-80 object-cover border-8 border-orange-800 rounded-lg mx-auto mb-4"
            />
            <p className="text-lg font-bold">Biryani Bliss:<br /> Aromatic Rice and Tender Chicken Fusion.</p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section>
        <div id="specials" className="bg-orange-400 py-8 text-7xl text-center text-amber-900 font-mono font-extrabold border-t-4 border-orange-950 rounded-lg border-b-4">
          SPECIALTIES
        </div>

        {/* Parent div for flexbox layout */}
        <div className="flex flex-col md:flex-row justify-between mt-5">

          {/* First pizza section */}
          <div className="py-16 w-full md:w-1/3 text-center">
            <h1 className="text-4xl font-mono font-black pl-5">PIZZA</h1>
            <ul className="list-none pl-8 text-lg">
              <li className="py-2 font-semibold">Spicy Inferno Pizza</li>
              <li className="py-2 font-semibold">Mighty Margherita</li>
              <li className="py-2 font-semibold">Cheesy Paradise</li>
              <li className="py-2 font-semibold">BBQ Blast Pizza</li>
              <li className="py-2 font-semibold">Tropical Hawaiian Delight</li>
              <li className="py-2 font-semibold">Veggie Supreme Feast</li>
              <li className="py-2 font-semibold">Pepperoni Overload</li>
            </ul>
          </div>

          {/* Second pizza section */}
          <div className="py-16 w-full md:w-1/3 text-center">
            <h2 className="text-4xl font-mono font-black pl-5">Main Course</h2>
            <ul className="list-none text-center text-lg">
              <li className="py-2 font-semibold">Spicy Inferno Pizza</li>
              <li className="py-2 font-semibold">Mighty Margherita</li>
              <li className="py-2 font-semibold">Cheesy Paradise</li>
              <li className="py-2 font-semibold">BBQ Blast Pizza</li>
              <li className="py-2 font-semibold">Tropical Hawaiian Delight</li>
              <li className="py-2 font-semibold">Veggie Supreme Feast</li>
              <li className="py-2 font-semibold">Pepperoni Overload</li>
            </ul>
          </div>

          {/* Desserts Section */}
          <div className="py-16 w-full md:w-1/3 text-center">
            <h3 className="text-4xl font-bold">Desserts</h3>
            <ul className="list-none text-lg">
              <li className="py-2 font-semibold">Chocolate Lava Cake</li>
              <li className="py-2 font-semibold">Tiramisu Delight</li>
              <li className="py-2 font-semibold">Cheesecake Heaven</li>
              <li className="py-2 font-semibold">Ice Cream Sundae</li>
              <li className="py-2 font-semibold">Fruit Tart</li>
              <li className="py-2 font-semibold">Brownie Bonanza</li>
              <li className="py-2 font-semibold">KULFA</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;
