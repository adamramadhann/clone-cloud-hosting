import React from 'react';
import { 
  FaCpanel,
  FaDocker,
  FaNodeJs,
  FaWordpressSimple
} from 'react-icons/fa';
import { SiMariadbfoundation, SiMoodle, SiPlesk } from 'react-icons/si';

const images = [
  {
    id: 'wordpress',
    name: 'Wordpress',
    Icon: FaWordpressSimple
  },
  {
    id: 'moodle',
    name: 'Moodle',
    Icon: SiMoodle
  },
  {
    id: 'docker',
    name: 'Docker',
    Icon: FaDocker
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    Icon: FaNodeJs
  },
  {
    id: 'plesk',
    name: 'Plesk',
    Icon: SiPlesk
  },
  {
    id: 'cpanel',
    name: 'CPanel',
    Icon: FaCpanel
  },
  {
    id: 'mariadb',
    name: 'MaridaDB',
    Icon: SiMariadbfoundation
  },
  {
    id: 'wordpress',
    name: 'Wordpress',
    Icon: FaWordpressSimple
  },
  {
    id: 'moodle',
    name: 'Moodle',
    Icon: SiMoodle
  },
  {
    id: 'docker',
    name: 'Docker',
    Icon: FaDocker
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    Icon: FaNodeJs
  },
  {
    id: 'plesk',
    name: 'Plesk',
    Icon: SiPlesk
  },
  {
    id: 'cpanel',
    name: 'CPanel',
    Icon: FaCpanel
  },
  {
    id: 'mariadb',
    name: 'MaridaDB',
    Icon: SiMariadbfoundation
  },
  {
    id: 'wordpress',
    name: 'Wordpress',
    Icon: FaWordpressSimple
  },
  {
    id: 'moodle',
    name: 'Moodle',
    Icon: SiMoodle
  },
  {
    id: 'docker',
    name: 'Docker',
    Icon: FaDocker
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    Icon: FaNodeJs
  },
  {
    id: 'plesk',
    name: 'Plesk',
    Icon: SiPlesk
  },
  {
    id: 'cpanel',
    name: 'CPanel',
    Icon: FaCpanel
  },
  {
    id: 'mariadb',
    name: 'MaridaDB',
    Icon: SiMariadbfoundation
  },
  {
    id: 'wordpress',
    name: 'Wordpress',
    Icon: FaWordpressSimple
  },
  {
    id: 'moodle',
    name: 'Moodle',
    Icon: SiMoodle
  },
  {
    id: 'docker',
    name: 'Docker',
    Icon: FaDocker
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    Icon: FaNodeJs
  },
  {
    id: 'plesk',
    name: 'Plesk',
    Icon: SiPlesk
  },
  {
    id: 'cpanel',
    name: 'CPanel',
    Icon: FaCpanel
  },
  {
    id: 'mariadb',
    name: 'MaridaDB',
    Icon: SiMariadbfoundation
  },
];

const ImageSelector = ({ selectedImage, onSelect }) => {
  return (
    <div className="w-full max-w-[900px] h-56 grid grid-cols-7 gap-3 py-4 px-6 bg-white border border-gray-200 overflow-y-auto no-scrollbar mb-6">
      {images.map(({ id, Icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg  transition-all duration-100 ease-in-out hover:border-2 ${
            selectedImage === id
              ? 'border-2 border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};

export default ImageSelector