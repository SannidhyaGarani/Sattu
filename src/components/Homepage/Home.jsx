import React from 'react';
import Hero from '../Sattu/Hero';
import CategoriesSection from '../Sattu/CategoriesSection';

import Bestsellers from '../Sattu/Bestsellers';
import WhyChooseSection from '../Sattu/WhyChooseSection';
import Testimonials from '../Sattu/Testimonials';
import OfferBanner from '../Sattu/OfferBanner';
import HowToMake from '../Sattu/HowToMake';

const Home = () => {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Hero />
      <CategoriesSection />
      <WhyChooseSection />
      <Bestsellers />
      <HowToMake/>
      <OfferBanner />
      <Testimonials />
    </main>
  );
};

export default Home;
