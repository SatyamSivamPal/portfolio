import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bootstrap,
    express,
    gamer,
    mern,
    restaraunt,
    hackathon,
    cplus,
    vite,
    ai,
    user,
    corona,
    booking,
    amiara

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Developer",
      icon: mern,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Gamer",
      icon: gamer,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
        name:"express",
        icon: express,
    },
    {
        name:"bootstrap",
        icon: bootstrap
    },{
      name:"C++",
      icon:cplus
    },
    {
      name:"Vite JS",
      icon:vite
    }
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Amiara Restaraunt",
      icon: restaraunt,
      iconBg: "#e6dedd",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using MERN and other related technologies.",
        "Collaborating with frontend teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing Payment gateway in the website through the RazorPay and other backend releated works.",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "Hackathon, NIT Rourkela",
      icon: hackathon,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed and maintained a successful chat app named DOOGLE.",
        "Collaborating with cross-functional teams including website designers, frontend developer, and other developers to create high-quality products.",
        "Developed a full-stack web application using React, Socket.io and Chakra UI.",
        "Implemented new features, including group chat and Notification functionality.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI-Image Generator",
      description:
        "To leverage artificial intelligence and machine learning to create high-quality, visually stunning images.Use of openai to generate different images.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/SatyamSivamPal/image_generator",
    },
    {
      name: "User Authentication",
      description:
        "To provide secure and efficient user authentication services.2-Step verification and implemented nodemailer to sent OTP to recover the Password.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: user,
      source_code_link: "https://github.com/SatyamSivamPal/mernlogin",
    },
    {
      name: "Corona Tracker",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Javasript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: corona,
      source_code_link: "https://github.com/SatyamSivamPal/CoronaTracker",
    },
    {
      name: "Hotel Booking",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: booking,
      source_code_link: "https://github.com/SatyamSivamPal/Tourism_bookin",
    },
    {
      name: "Amaira Restaraunt",
      description:
        "The goal of this project is to design and develop a dynamic and interactive website for a restaurant. The website will serve as an online platform for customers to explore the restaurant's offerings, make reservations, and obtain essential information. ",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "RazorPay",
          color: "pink-text-gradient",
        },
      ],
      image: amiara,
      source_code_link: "https://github.com/SatyamSivamPal/amaira_restaraunt",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };