import React, { useEffect, useState } from 'react';
import InsightRecources from '../components/adam/InsightsResources/InsightRecourcesBg';
import InsightRecourcesIconMenu from '../components/adam/InsightsResources/InsightRecourcesIconMenu';
import FeaturedCustomer from '../components/adam/FeaturedCstmr/FeaturedCustomer';
import BuildForBusines from '../components/adam/buildForBusines/BuildForBusines';
import ControlPanelApi from '../components/adam/controlPanelApi/ControlPanelApi';

const sections = [
  { id: 'controlPanelApi', label: 'CONTROL PANEL API & API', component: <ControlPanelApi /> },
  { id: 'buildForBusines', label: 'BUILD FOR BUSINESS', component: <BuildForBusines /> },
  { id: 'featuredCustomer', label: 'FEATURED CUSTOMER', component: <FeaturedCustomer /> },
  { id: 'insightRecources', label: 'INSIGHT & RESOURCES', component: (
    <>
      <InsightRecourcesIconMenu />
      <InsightRecources />
    </>
  )}
];

const InsightsResourcesScreen = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.info(activeSection);

  return (
    <div className="w-full h-auto flex flex-col mt-40">
      {/* Sticky Navigation Bar */}
      <div className="flex items-center justify-center gap-16 bg-white sticky top-0 z-50 h-auto py-3 px-6">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`text-gray-800 hover:text-blue-500 text-xl ${activeSection === section.id ? 'text-white rounded-full px-3 py-2 bg-gradient-to-tr from-[#FDA14D] to-[#FD4DF6]' : ''}`}
          >
            {section.label}
          </a>
        ))}
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="section">
          {section.component}
        </div>
      ))}
    </div>
  );
};

export default InsightsResourcesScreen;
