import React from 'react';
import { aapanelSec1, cpanelSec1, cyberpanelSec1, dapodikSec1, dockerSec1, haproxySec1, mailcoachSec1, mariadbSec1, mikrotikSec1, moodleSec1, nodejsSec1, pleskSec1, postgresqlSec1, sisterSec1, webuzoSec1, wordpressSec1 } from '../../../../importGambar';

const images = [
  {
    id: 1,
    name: 'Wordpress',
    img : wordpressSec1
  },
  {
    id: 2,
    name: 'Moodle',
    img: moodleSec1
  },
  {
    id: 3,
    name: 'Docker',
    img: dockerSec1
  },
  {
    id: 4,
    name: 'NodeJS',
    img: nodejsSec1
  },
  {
    id: 5,
    name: 'Sister',
    img: sisterSec1
  },
  {
    id: 6,
    name: 'CyberPanel',
    img: cyberpanelSec1
  },
  {
    id: 7,
    name: 'CPanel',
    img: cpanelSec1
  },
  {
    id: 8,
    name: 'Plesk',
    img: pleskSec1
  },
  {
    id: 9,
    name: 'MailCoach',
    img : mailcoachSec1
  },
  {
    id: 10,
    name: 'Dapodik',
    img: dapodikSec1
  },
  {
    id: 11,
    name: 'MariaDB',
    img: mariadbSec1
  },
  {
    id: 12,
    name: 'Webuzo',
    img: webuzoSec1
  },
  {
    id: 13,
    name: 'Mikrotik',
    img: mikrotikSec1
  },
  {
    id: 14,
    name: 'HAProxy',
    img: haproxySec1
  },
  {
    id: 15,
    name: 'PostgreSQL',
    img: postgresqlSec1
  },
  {
    id: 16,
    name: 'AaPanel',
    img: aapanelSec1
  },
  {
    id: 1,
    name: 'Wordpress',
    img : wordpressSec1
  },
  {
    id: 2,
    name: 'Moodle',
    img: moodleSec1
  },
  {
    id: 3,
    name: 'Docker',
    img: dockerSec1
  },
  {
    id: 4,
    name: 'NodeJS',
    img: nodejsSec1
  },
  {
    id: 5,
    name: 'Sister',
    img: sisterSec1
  },
  {
    id: 6,
    name: 'CyberPanel',
    img: cyberpanelSec1
  },
  {
    id: 7,
    name: 'CPanel',
    img: cpanelSec1
  },
  {
    id: 8,
    name: 'Plesk',
    img: pleskSec1
  },
  {
    id: 9,
    name: 'MailCoach',
    img : mailcoachSec1
  },
  {
    id: 10,
    name: 'Dapodik',
    img: dapodikSec1
  },
  {
    id: 11,
    name: 'MariaDB',
    img: mariadbSec1
  },
  {
    id: 12,
    name: 'Webuzo',
    img: webuzoSec1
  },
  {
    id: 13,
    name: 'Mikrotik',
    img: mikrotikSec1
  },
  {
    id: 14,
    name: 'HAProxy',
    img: haproxySec1
  },
  {
    id: 15,
    name: 'PostgreSQL',
    img: postgresqlSec1
  },
  {
    id: 16,
    name: 'AaPanel',
    img: aapanelSec1
  },
];

const ImageSelector = ({ selectedImage, onSelect }) => {
  return (
    <div className="w-full max-w-[900px] h-56 grid grid-cols-8 gap-3 py-4 px-6 bg-white border border-gray-200 overflow-y-auto no-scrollbar mb-6">
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
          <img src={item.img} alt={item.name} className="object-contain" />
        </button>
      ))}
    </div>
  );
};

export default ImageSelector