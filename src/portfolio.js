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
  username: "Nehal Hosalikar",
  title: "Hi there, I'm Nehal Hosalikar",
  subTitle: emoji(
    "A passionate Software Developer and Technology enthusiast who loves to solve problems using technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12cbQANHRVutE6zD3H4CLNlm5tCb264yj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NehalH",
  linkedin: "https://www.linkedin.com/in/nehal-hosalikar-35535a204/",
  gmail: "nhosalikar@gmail.com",
  twitter: "https://twitter.com/NHosalikar",
  stackoverflow: "https://stackoverflow.com/users/16901466/nehal-hosalikars",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Developer exploring the World of Technology",
  skills: [
    emoji("⚡ Developing Applications and Tools for Android and Linux"),
    emoji("⚡ I build and code things"),
    emoji("⚡ Contributing to open source communities")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-copyright"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fas fa-square-terminal"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-chevron-left"
    },
    {
      skillName: "postgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Illustrator",
      fontAwesomeClassname: " "
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sahyadri College of Engineering and Management",
      logo: require("./assets/images/sahyadri.png"),
      subHeader: "Bachelors of Engineering in Information Science and Engineering",
      duration: "2020 - 2024",
      desc: "CGPA - 8.12",
      descBullets: [
        "Participated in various technical events",
        "Technical Member of Team Challengers Student Club",
        "Worked as organizer for National Level Techno Cultural Event - Aerophillia 2022",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java Programming", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python Programming",
      progressPercentage: "50%"
    },
    {
      Stack: "C Programming",
      progressPercentage: "50%"
    },
    {
      Stack: "Linux - Bash",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Intern",
      company: "Unbox Robotics",
      companylogo: require("./assets/images/unbox.png"),
      date: "August 2021 – November 2021",
      desc: "Worked as a Software Intern at Unbox Robotics, Pune",
      descBullets: ["Worked on technologies like ROS, DDS, Embedded Systems"]
    },
    {
      role: "Research and Development Intern",
      company: "CSD, NITK",
      companylogo: require("./assets/images/nitk.png"),
      date: "January 2021 – April 2021",
      desc: "Worked as a Research and Development Intern at Centre for System Design at National Institute of Technology, Karnataka"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      //image: require("./assets/images/vtol.png"),
      projectName: "AEROPHILIA'22  Organizer Application",
      projectDesc:
        "A Mobile Application built using Flutter and Firebase, specifically for the Organizers of AEROPHILIA 2022, a national level TechnoCultural fest.",
      footerLink: [
        {
          name: "Repository",
          url: ""
        }

        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/amar.png"),
      projectName: "BookSwap",
      projectDesc:
        "A web-based book exchange platform built using Flask, SQLAlchemy, and PostgreSQL. BookSwap streamlines the book exchange process, making it easier for readers to acquire more books without spending money.",
      footerLink: [
        {
          name: "Repository",
          url: ""
        }
      ]
    },
    {
      //image: require("./assets/images/zephyrpanel.png"),
      projectName: "Walnut Locker",
      projectDesc:
        "This project is a desktop application that provides advanced file and application protection by leveraging the operating system's user permission restrictions and dynamic passwords.",
      footerLink: [
        {
          name: "View Repository",
          url: ""
        }
      ]
    },
    {
      //image: require("./assets/images/rps.png"),
      projectName: "BacLens",
      projectDesc:
        "A Mobile application built using Flutter that can recognize images of various microscopic organisms using Machine learning.",
      footerLink: [
        {
          name: "View Repository",
          url: ""
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
      title: "Smart India Hackathon 2020",
      subtitle:
        "Winner of Smart India Hackathon 2020 under Ministry of health and family welfare",
      image: require("./assets/images/sih.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1AdfRhrpncM-M_eYOz-MXZEBnNJjwdryX/view?usp=sharing"
        },
        {
          name: "News Website",
          url: "https://timesofindia.indiatimes.com/home/education/news/sahyadri-college-win-smart-india-hackathon-2020/articleshow/81314342.cms"
        }
      ]
    },
    {
      title: "NXP Hovergames",
      subtitle:
        "Bonus Prize winner of NXP Hovergames Challenge 2 out of participants from all over the world ",
      image: require("./assets/images/nxp.png"),
      footerLink: [
        {
          name: "View Website",
          url: "https://www.hackster.io/team-challengers/g-1-intelligent-drone-for-medicine-delivery-c50f37"
        }
      ]
    },
    {
      title: "IISF - 2021",
      subtitle:
        "Winner of India International Science Festival held at Goa,India",
      image: require("./assets/images/iisf.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1f2VWPYpWSZhBw-QeLpVfxMVAE2rKD9MN/view?usp=sharing"
        }
      ]
    },

    {
      title: "Self-Driving Car Nanodegree",
      subtitle: "Completed Nanodegree program on self-driving cars by Udacity ",
      image: require("./assets/images/udacity.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jMFQiT-arsBpvugF8i3NHsvoC3tOUSbl/view?usp=sharing"
        },
        {
          name: "Project Link",
          url: "https://github.com/G1-k/Advanced_Lane_Detection"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
      title: "Git.Set.Go",
      subtitle: "A Git and Github workshop for students",
      //slides_url: "https://bit.ly/saadpasta-slides",
      //event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+91 8217785009",
  email_address: "nhosalikar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "NehalHosalikar", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

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
  twitterDetails
};
