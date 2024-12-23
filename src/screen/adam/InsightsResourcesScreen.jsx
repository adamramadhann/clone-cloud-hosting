import React, { useEffect, useState } from 'react';
import ControlPanelApi from '../../components/adam/controlPanelApi/ControlPanelApi';
import BuildForBusines from '../../components/adam/buildForBusines/BuildForBusines';
import FeaturedCustomer from '../../components/adam/FeaturedCstmr/FeaturedCustomer';
import InsightRecourcesIconMenu from '../../components/adam/InsightsResources/InsightRecourcesIconMenu';
import InsightRecources from '../../components/adam/InsightsResources/InsightRecourcesBg';

const sections = [
  { id: 'controlPanel', label: 'CONTROL PANEL & API', component: <ControlPanelApi /> },
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
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('sticky-nav');
    const navbarTop = navbar.offsetTop;

    const handleScroll = () => {
      // Update scroll state
      setHasScrolled(window.scrollY > 0);
      
      // Handle sticky state
      setIsSticky(window.scrollY > navbarTop);

      // Handle active section
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjusted trigger point
      let currentSection = '';
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          
          if (scrollPosition >= absoluteTop && 
              scrollPosition < absoluteTop + element.offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }

      // Only set active section if we've scrolled or if it's not the control panel
      if (hasScrolled || currentSection !== 'controlPanel') {
        setActiveSection(currentSection);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check without setting active section for control panel
    setIsSticky(window.scrollY > navbarTop);
    setHasScrolled(window.scrollY > 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <>
      {/* Fixed height spacer */}
      <div className="h-16"/>
      
      {/* Navigation */}
      <div 
        id="sticky-nav"
        className={`${
          isSticky 
            ? 'fixed top-0 left-0 right-0 shadow-lg bg-white' 
            : 'relative'
        } bg-transparent z-50 transition-shadow duration-200`}
      >
        <div className="flex items-center justify-center gap-16 py-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-gray-800 hover:text-white hover:rounded-full hover:px-3 hover:py-2 hover:bg-gradient-to-r from-[#FDA14D] to-[#FD4DF6] font-semibold text-lg tracking-wider transition-all duration-300 ${
                activeSection === section.id 
                  ? 'text-white rounded-full px-3 py-2 bg-gradient-to-r from-[#FDA14D] to-[#FD4DF6]' 
                  : ''
              }`}
              onClick={() => {
                // When clicking a link, immediately set it as active
                // unless it's Control Panel API and we haven't scrolled
                if (section.id !== 'controlPanel' || hasScrolled) {
                  setActiveSection(section.id);
                }
              }}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="w-full -mt-32">
        {sections.map((section) => (
          <div 
            key={section.id}
            id={section.id}
            className="section w-full py-20"
          >
            {section.component}
          </div>
        ))}
      </div>
    </>
  );
};

export default InsightsResourcesScreen;