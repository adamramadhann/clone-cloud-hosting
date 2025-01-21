import React from 'react';
import { 
  FaCpanel,
  FaDocker,
  FaNodeJs,
  FaWordpressSimple
} from 'react-icons/fa';
import { SiMariadbfoundation, SiMoodle, SiPlesk } from 'react-icons/si';
import { aapanelsec1, cpanelsec1, cyberpanelsec1, dapodiksec1, dockersec1, haproxysec1, mailcoachsec1, mariaDBsec1, mikrotiksec1, moodlesec1, nodejssec1, plesksec1, webuzosec1, wordpresssec1 } from '../../../../importGambar.js';

const images = [
  {
    id: 1,
    name: 'Wordpress',
    img: wordpresssec1
  },
  {
    id: 2,
    name: 'Moodle',
    img: moodlesec1
  },
  {
    id: 3,
    name: 'Docker',
    img: dockersec1
  },
  {
    id: 4,
    name: 'NodeJS',
    img: nodejssec1
  },
  {
    id: 5,
    name: 'CyberPanel',
    img: cyberpanelsec1
  },
  {
    id: 6,
    name: 'CPanel',
    img: cpanelsec1
  },
  {
    id: 7,
    name: 'Plesk',
    img: plesksec1
  },
  {
    id: 8,
    name: 'MailCoach',
    img: mailcoachsec1
  },
  {
    id: 9,
    name: 'Dapodik',
    img: dapodiksec1
  },
  {
    id: 10,
    name: 'MariaDB',
    img: mariaDBsec1
  },
  {
    id: 11,
    name: 'Webuzo',
    img: webuzosec1
  },
  {
    id: 12,
    name: 'Mikrotik',
    img: mikrotiksec1
  },
  {
    id: 13,
    name: 'HAProxy',
    img: haproxysec1
  },
  {
    id: 14,
    name: 'AaPanel',
    img: aapanelsec1
  },
  {
    id: 15,
    name: 'Wordpress',
    img: wordpresssec1
  },
  {
    id: 2,
    name: 'Moodle',
    img: moodlesec1
  },
  {
    id: 3,
    name: 'Docker',
    img: dockersec1
  },
  {
    id: 4,
    name: 'NodeJS',
    img: nodejssec1
  },
  {
    id: 5,
    name: 'CyberPanel',
    img: cyberpanelsec1
  },
  {
    id: 6,
    name: 'CPanel',
    img: cpanelsec1
  },
  {
    id: 7,
    name: 'Plesk',
    img: plesksec1
  },
  {
    id: 8,
    name: 'MailCoach',
    img: mailcoachsec1
  },
  {
    id: 9,
    name: 'Dapodik',
    img: dapodiksec1
  },
  {
    id: 10,
    name: 'MariaDB',
    img: mariaDBsec1
  },
  {
    id: 11,
    name: 'Webuzo',
    img: webuzosec1
  },
  {
    id: 12,
    name: 'Mikrotik',
    img: mikrotiksec1
  },
  {
    id: 13,
    name: 'HAProxy',
    img: haproxysec1
  },
  {
    id: 14,
    name: 'AaPanel',
    img: aapanelsec1
  },
];

const ImageSelector = ({ selectedImage, onSelect }) => {
  return (
    <div className="w-full max-w-[900px] h-56 grid grid-cols-7 gap-3 py-4 px-6 bg-white border border-gray-200 overflow-y-auto no-scrollbar mb-6">
      {images.map((item, id) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`w-12 h-12 flex items-center justify-center rounded-lg  transition-all duration-100 ease-in-out hover:border-2 ${
            selectedImage === id
              ? 'border-2 border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          {/* <Icon className="w-5 h-5" /> */}
          <img src={item?.img} alt="" />
        </button>
      ))}
    </div>
  );
};

export default ImageSelector