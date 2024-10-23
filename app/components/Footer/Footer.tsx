import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="about" className="bg-gradient-to-tr from-orange-500 to-amber-900 text-white py-10 border-t-8 border-y-yellow-950">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Delivery Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold mb-4">Delivery</h2>
          <p>Fast and reliable delivery to your door. We offer delivery services across the city. Enjoy our delicious food in the comfort of your home.</p>
        </div>

        {/* Contact Us Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li>Phone: <a href="tel:111-222-333" className="hover:underline">111-222-333</a></li>
            <li>Email: <a href="mailto:info@yourrestaurant.com" className="hover:underline">info@yourrestaurant.com</a></li>
            <li>Address: 123 Food Street, City</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p>We are passionate about bringing you the best food experience. Our chefs use the finest ingredients to create mouth-watering dishes. Join us for an unforgettable dining experience.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-dashed border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Your Restaurant. All rights reserved.</p>
      </div>

      <div className="mt-4 border-t border-dashed border-gray-400 pt-2 text-center">
        <p className="text-sm">A CREATION BY ALI HAMZA</p>
      </div>

      <div className="text-center">
        <Image 
          src="/pic.png" 
          width={300} 
          height={400} 
          alt='PHOTO' 
          className="h-80 object-cover mt-16 rounded-lg mx-auto mb-4" 
        />
      </div>
    </footer>
  );
}
