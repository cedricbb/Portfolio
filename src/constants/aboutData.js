// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaPhp
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiAdobexd,
    SiAdobephotoshop,
    SiPrestashop,
    SiMysql
  } from "react-icons/si";
  
  
  //  data
  export const aboutData = [
    {
      title: 'Skills',
      info: [
        {
          title: 'Web Development',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiNextdotjs />,
            <FaWordpress />,
            <SiPrestashop />,
            <FaPhp />,
            <SiMysql />
          ],
        },
        {
          title: 'UI/UX Design',
          icons: [<SiAdobexd />, <SiAdobephotoshop />],
        },
      ],
    },
    {
      title: 'Hobbies',
      info: [
        {
          title: 'New Technologies'
        },
        {
          title: 'Video Games',
        },
        {
          title: 'AI',
        },
      ],
    },
    {
      title: 'Works',
      info: [
        {
          title: 'Fullstack Developer - Arxama',
          stage: '2017 - 2023',
        },
        {
          title: 'IT Support Technician - Passman',
          stage: '2013 - 2016',
        },
        {
          title: 'Logistics Manager - Planète Mode',
          stage: '2007 - 2013',
        },
      ],
    },
    {
      title: 'Formations',
      info: [
        {
          title: 'Fullstack Developer - Self-taught',
          stage: '2011 - Présent',
        },
        {
          title: 'Application Developer - WebForce 3',
          stage: '2017',
        },
        {
          title: 'IT Support Technician - AFPA',
          stage: '2012 - 2013',
        },
      ],
    },
  ];