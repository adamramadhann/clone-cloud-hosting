import React, { useEffect, useState } from 'react';
import InsightRecources from '../components/adam/InsightsResources/InsightRecourcesBg';
import InsightRecourcesIconMenu from '../components/adam/InsightsResources/InsightRecourcesIconMenu';
import FeaturedCustomer from '../components/adam/FeaturedCstmr/FeaturedCustomer';
import BuildForBusines from '../components/adam/buildForBusines/BuildForBusines';
import ControlPanelApi from '../components/adam/controlPanelApi/ControlPanelApi';

const InsightsResourcesScreen = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('');

  // Function to handle scroll event
  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      // Check if the section is in the viewport
      if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.info(activeSection)

  return (
    <div className='w-full h-auto flex flex-col mt-40'>
      {/* Sticky Navigation Bar */}
      <div className="flex items-center justify-center gap-20 bg-white sticky top-0 z-50 py-8 px-6">
        <a href="#controlPanelApi" className={` hover:text-blue-500 ${activeSection === 'controlPanelApi' ? 'text-white rounded-full px-3 py-2 bg-green-500' : 'text-gray-800'}`}>CONTROL PANEL API</a>
        <a href="#buildForBusines" className={` hover:text-blue-500 ${activeSection === 'buildForBusines' ? 'text-white rounded-full px-3 py-2 bg-green-500' : 'text-green-500'}`}>BUILD FOR BUSINESS</a>
        <a href="#featuredCustomer" className={` hover:text-blue-500 ${activeSection === 'featuredCustomer' ? 'text-white rounded-full px-3 py-2 bg-green-500' : 'text-green-400'}`}>FEATURED CUSTOMER</a>
        <a href="#insightRecources" className={`text-gray-800 hover:text-blue-500 ${activeSection === 'insightRecources' ? 'text-white rounded-full px-3 py-2 bg-green-500' : 'text-green-500'}`}>INSIGHT & RESOURCES</a>
      </div>

      {/* Sections */}
      <div id="controlPanelApi" className="section">
        <ControlPanelApi />
      </div>
      <div id="buildForBusines" className="section">
        <BuildForBusines />
      </div>
      <div id="featuredCustomer" className="section">
        <FeaturedCustomer />
      </div>
      <div id="insightRecources" className="section">
        <InsightRecourcesIconMenu />
        <InsightRecources />
      </div>
    </div>
  );
};

export default InsightsResourcesScreen;