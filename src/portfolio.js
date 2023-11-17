/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sourjya Mukherjee",
  title: "Hi, I'm Sourjya",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building SAAS applications with Typescript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-PCQZad1o8MxSPVK0xa0sdmMVlFQc3QC/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sourjyar7",
  linkedin: "https://www.linkedin.com/in/sourjya-mukherjee-9710b2152/",
  gmail: "sourjyar7@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Understand Business Problems and Solve them the SAAS way",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Go fully Cloud Native through services like AWS, GCP, Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node Js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Nest Js",
      fontAwesomeClassname: "fa-solid fa-filter"
    },
    {
      skillName: "Mongo DB & Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Postgres & Mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Calcutta University",
      logo: require("./assets/images/cal.webp"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "May 2016 - Jun 2020",
      desc: "First Class B.Tech with 7.56 CGPA",
    },
    {
      schoolName: "Vivekananda Mission School",
      logo: require("./assets/images/vms.jpeg"),
      subHeader: "ICSE and ISC",
      duration: "April 2000 - April 2015",
      desc: "Ranked top 5% in the program. Took courses about Computer Science Basics, Physics, Mathematics, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Refactor Academy",
      companylogo: require("./assets/images/refactorLogo.png"),
      date: "May 2022 – Present",
      desc: "A Multi-tenant SaaS LMS platform",
      descBullets: [
        "Built an OPENAI powered Interview Bot to cut hiring costs by 50 %",
        "Managing a Kubernetes cluster with 18 microservices and 2lakh+ users with only 1% avg downtime"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Trakinvest / Traklabs",
      companylogo: require("./assets/images/ti.jpeg"),
      date: "March 2021 – April 2022",
      desc: "A Virtual Stock Trading Platform",
      descBullets: [
        "Cut down product development costs by 50 %",
        "Developed a fully proctored browser based assessment platform"
      ]
    },
    {
      role: "Software Engineer",
      company: "L&T Technology",
      companylogo: require("./assets/images/lti.jpeg"),
      date: "Oct 2020 – Feb 2021",
      desc: "Worked on ERP solutions for client projects",
      descBullets: [
        "Primary Tools: Angular Js , SAP ABAP"
      ]
    },
    {
      role: "Research Intern",
      company: "IIT Patna",
      companylogo: require("./assets/images/iit.jpeg"),
      date: "May 2019 – Aug 2019",
      desc: "Built and trained a Random Forest model for smart task offloading in Edge devices based on CPU load,network latency",
      descBullets: [
        "Primary Tools: Python, Java, Pandas, SkLearn"
      ]
    },
    {
      role: "Application Developer Intern",
      company: "RRSC EAST (ISRO)",
      companylogo: require("./assets/images/isro.png"),
      date: "Aug 2018 – Jan 2019",
      desc: "Built a cross platform mobile application for real time satellite data monitoring using socket.io",
      descBullets: [
        "Primary Tools: Apache Cordova, Javascript , Websockets"
      ]
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/loominate.webp"),
      projectName: "Loominate",
      projectDesc: "A Multi-tenant SaaS product like Slack",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.loominate.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/refactorLogo.png"),
      projectName: "Refactor Academy",
      projectDesc: "A Multi-tenant SaaS LMS platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.refactor.academy/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Browser based Models with Tensorflow.js by deep learning.ai",
      subtitle:
        "Skills Gained: Convolutional Neural Network, Object Detection, Tensorflow, Tensorflow Js",
      image: require("./assets/images/dplai.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15eC1MAIhj8xqnSvviUMsEZE-7E1OnSDa/view?usp=sharing"
        }
      ]
    },
    {
      title: "Python for Data Science and AI",
      subtitle:
        "Skills Gained: Access web data using APIs and Web Scraping in Python, Pandas, Numpy",
      image: require("./assets/images/ibm.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1YZIE7YEQK4VOv2ZD_bJM5Cgpi652mpIm/view?usp=sharing"
        }
      ]
    },

    {
      title: "Advanced Stock Trading Strategies by MTG",
      subtitle: "Skills Gained: Swing and Day Trading, Long term and Short term Analysis",
      image: require("./assets/images/mtg.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9874052864",
  email_address: "sourjyar7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
 
const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
//u are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
