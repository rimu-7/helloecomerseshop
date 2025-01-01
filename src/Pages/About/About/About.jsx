// src/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to <span className="font-semibold text-green-600">[Your Brand Name]</span>, where we believe that shopping should be an enjoyable and seamless experience. Founded in [Year], our mission is to provide customers with a diverse range of high-quality products at competitive prices, all while delivering exceptional customer service.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-600 mb-4">
        We envision a world where everyone has access to the products they love, delivered right to their doorstep. Our goal is to create a shopping platform that not only meets your needs but also exceeds your expectations.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What We Offer</h2>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
        <li><strong>Wide Range of Products:</strong> From fashion and electronics to home goods and beauty products, we offer a vast selection of items to cater to all your shopping needs.</li>
        <li><strong>User-Friendly Interface:</strong> Our website is designed with you in mind, ensuring a smooth and intuitive shopping experience.</li>
        <li><strong>Secure Shopping:</strong> Your safety is our priority. We use the latest encryption technology to protect your personal and payment information.</li>
        <li><strong>Fast and Reliable Shipping:</strong> Enjoy fast shipping options and real-time tracking for your orders.</li>
        <li><strong>Easy Returns and Exchanges:</strong> Our hassle-free return and exchange policy makes it easy to get what you need.</li>
        <li><strong>Customer Support:</strong> Our dedicated customer service team is here to assist you with any questions or concerns.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Commitment to Quality</h2>
      <p className="text-lg text-gray-600 mb-4">
        At <span className="font-semibold text-green-600">[Your Brand Name]</span>, we are committed to sourcing products from reputable suppliers and manufacturers. We carefully curate our selection to ensure that every item meets our high standards for quality and durability.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Join Our Community</h2>
      <p className="text-lg text-gray-600 mb-4">
        Follow us on social media to stay updated on the latest trends, promotions, and exclusive offers. Join our newsletter for special discounts and be the first to know about new arrivals.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Thank You for Choosing Us</h2>
      <p className="text-lg text-gray-600 mb-4">
        We appreciate your support and trust in <span className="font-semibold text-green-600">[Your Brand Name]</span>. We are excited to be a part of your shopping journey and look forward to serving you. If you have any feedback or suggestions, please don’t hesitate to reach out.
      </p>
    </div>
  );
};

export default About;
