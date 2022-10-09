/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "japhethjoepari",
  description:
    "Software Developer and Technical writer. using cutting edge technologies to learn and successfully deliver solutions to problems",
  og: {
    title: "Japheth Joepari Portfolio",
    type: "website",
    url: "http://japheth-joepari.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Japheth Joepari",
  logo_name: "japhethJoepari",
  nickname: "Joepari_Codes",
  subTitle:
    "Software Developer and Technical writer. using cutting edge technologies to learn and successfully deliver solutions to problems",
  resumeLink:
    "https://docs.google.com/document/d/1SSEt8r-y4u8DM9WWgG1cwfq6Y_FMw7c-mC52IZaXTgs/edit?usp=sharing",
  portfolio_repository: "https://github.com/japheth-joepari-portfolio",
  githubProfile: "https://github.com/japheth-joepari",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/japheth-joepari",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/japheth-joepari/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:phython023@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Joepari_Codes",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/japhethjoepari",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com//",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Currently exploring mobile app development using React Native",
        "⚡ Creating Fullstack Backend Applications in PHP, NextJs and Laravel",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Currently working  on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streams from DB to Server",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },

        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "##202A44",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Data Science Nigeria",
      subtitle: "Data Science",
      logo_path: "dsn.png",
      alt_name: "Data Science Certification",
      duration: "2019",
      descriptions: [
        "⚡ Studied software engineering subjects which include: Machine Learning, Data Science and Algorithms, AI etc.",
        "⚡ Completed courses on Data Science and Full Stack Software Development.",
        "⚡ Participated in Data Science Nigeria Kaggle competitions 2019.",
      ],
    },

    {
      title: "Hubiquitous H2022",
      subtitle: "Embeded Systems Engineering",
      logo_path: "ubit.png",
      alt_name: "Hubiquitous Certification",
      duration: "2022",
      descriptions: [
        "⚡ Studied the basics of electronics and Analog Electronics Engineering",
        "⚡ Started learning about micro-controllers and sensors",
        "⚡ Learnt about Hardware programming using C, C++, arduinoC Library, Python and MicroPython",
        "⚡ Learnt about the 'INTERNET OF THINGS (IOT)'",
        "⚡ Completed real world IoT projects using arduino, raspberry pi and other micro-controllers",
        "⚡ Participated in Hubiquitous H2022 Hackathon Challenge",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "VueJS Forge",
      subtitle: "- Certificate of participation",
      logo_path: "vs.png",
      certificate_link:
        "https://conference.vueschool.io/attendees/WdJgsz1LLA/certificate/download?signature=e9a4b6e79cbc96af276a43d3f5950ed0732743626a8e52303ad04b3e809c5090",
      alt_name: "vuejs certificatioon",
      color_code: "#00000099",
    },

    {
      title: "Hubiquituos",
      subtitle: "- Certificate of Proficiency",
      logo_path: "ubit.png",
      certificate_link: "#/education",
      alt_name: "Hubiquitous Certification",
      color_code: "#8C151599",
    },

    {
      title: "DataScience Nigeria",
      subtitle: "- Introduction to Python and ML",
      logo_path: "dsn.png",
      certificate_link: "#/education",
      alt_name: "Data Science Certification",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with evolving startups and some well established companies mostly as a junior developer and freelancer. I am also involved with opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work/Internships >>",
      experiences: [
        {
          title: "Full Stack Software Developer",
          company: "Freelance",
          company_url: "https://www.linkedin.com/in/japheth-joepari/",
          logo_path: "freecopy_logo.png",
          duration: "Aug 2021 - Till Now",
          location: "Abia State, Nigeria",
          description: `Conducting research and working on the client-side of web applications using the best frontend tools. 
          Ensuring application security, code quality and performance. Communicating and collaborating with multi-disciplinary 
          teams of engineers, designers, and other stakeholders on a daily basis to improve the workflow process. 
          Building and integrating reusable and responsive React components for both users and admin dashboard. 
          Architected a user platform with real-time responses using tools like Webpack and Pusher. 
          Helping team mates debug errors on their codes. Merging conflicts that arise from the git collab merge.`,
          color: "#fc1f20",
        },
        {
          title: "Junior Backend PHP Web Developer  (Intern)",
          company: "Innovation Growth Hub",
          company_url: "http://ighub.com.ng/",
          logo_path: "ighub.jpg",
          duration: "Oct 2019 - Jul 2021",
          location: "Abia State, Nigeria",
          description: `Contributed to code bases, Added new features and ensured that it was up-to-date in terms of structure, 
          security, browser and device compatibility.`,
          color: "#0879bf",
        },

        {
          title: "Junior Front End React Web Developer  (Intern)",
          company: "Learn Factory Nig",
          company_url: "https://learnfactory.com.ng/",
          logo_path: "LEARNFACTORY.png",
          duration: "May 2019 - Sep 2019",
          location: "Abia State, Nigeria",
          description: `Conducted research and created new web designs. 
          Collaborated with other developers and testers to improve the workflow process. 
          Analyzed requirements, designed, developed and implemented new changes to the existing software application. 
          Created responsive user interfaces using HTML5, CSS3 and JavaScript frameworks such as React js, Bootstrap, and Material UI...`,
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "japheth.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I enjoy writing and talking about my tech journey.",
    link: "https://medium.com/@jeffevurulobi",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Abia State, Nigeria",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Innovation+Growth+Hub/@5.1254152,7.3569817,17z/data=!3m1!4b1!4m5!3m4!1s0x1042994c2873ac91:0xfcb4bb3b99671be!8m2!3d5.1254099!4d7.3591758",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 704 197 0128",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
