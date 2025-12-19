import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import WhatsappIcon from '../components/Icon/WhatsappIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kanaga Durga..`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a  <strong className="text-stone-100">Full Stack Developer</strong>, currently learning
        about <strong className="text-stone-100">Full Stack </strong> helping build a modern, mobile-first, domain
        based and site builder.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a passionate Full Stack Development student who enjoys building clean and responsive web applications. I love learning new technologies, solving problems through code, and turning ideas into real projects.`,
  aboutItems: [
    {label: 'Location', text: 'Aundipatti, Theni', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Tamil Nadu / India', Icon: FlagIcon},
    {label: 'Study', text: 'Nadar Saraswathi College of Engineering & Technology,Theni', Icon: AcademicCapIcon},
    {label: 'Employment', text: '-', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Tamil',
        level: 10,
      },
      {
        name: 'Malayalam',
        level: 4,
      },
      {
        name: 'Telugu',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Css',
        level: 7,
      },
      {
        name: 'Html',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'java',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Ionic',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Student management system',
    description: 'A Student Management System is a web-based application designed to manage student records, academic details, attendance, and performance efficiently in a centralized platform.',
    url: 'https://github.com/Akshaya-Shri/studio',
    image: porfolioImage1,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Event schedular app',
    description: 'Developed an Event Scheduler App that supports event creation, scheduling, and reminders. The application demonstrates frontend development, backend integration, and efficient data handling to ensure smooth event management.',
    url: 'https://github.com/Akshaya-Shri/studio',
    image: porfolioImage7,
  },
  {
    title: 'Campus Connect',
    description: 'CampusConnect is a social networking platform designed to connect college students, enabling them to interact, share updates, and collaborate on academic and campus activities.',
    url: 'https://github.com/Akshaya-Shri/campusconnect',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
  date: '2023-2027',
  location: 'Nadar Saraswathi College of Engineering & Technology',
  title: 'Computer Science & Engineering',
  content: <p>Bachelor of Engineering</p>,
},

  {
    date: '2022-2023',
    location: 'SKA higher secondary school-Aundipatti',
    title: 'Higher Secondary Education',
    content: <p></p>,
  },
  {
    date: '2020-2021',
    location: 'SKA higher secondary school-Aundipatti',
    title: 'Secondary Education',
    content: <p></p>,
  },
];

export const achievements: TimelineItem[] = [
  {
    date: 'june-july 2025',
    location: 'Foclen Software Pvt.Ltd.,',
    title: 'INTERN- Core Java Concepts',
    content: (
      <p>
        I demonstrated strong technical skills and dedication during my internship
      </p>
    ),
  },
  {
    date: '2023 - 2024',
    location: 'Nadar Saraswathi College of Engineering & Technology',
    title: 'Academic Excellence- 1st Position',
    content: (
      <p>
        I'm secured 1st position, demonstrating exceptional academic excellence, dedication, and consistent performance. 
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'murugesan99659100@gmail.com',
      href: 'mailto:murugesan99659100@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Theni, Tamilnadu',
      href: 'https://www.google.com/maps/place/Maniyarampatti,+Tamil+Nadu/@9.972995,77.6239542,17.91z/data=!4m6!3m5!1s0x3b073ee5e9d87989:0x5fa8b3358ca3a818!8m2!3d9.9733532!4d77.6238993!16s%2Fg%2F1tdbp99d?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D',
    },
    {
      type: ContactType.Whatsapp,
      text: '+91 9965910035',
      href: 'https://wa.me/919965910035',
    },
    {
      type: ContactType.Github,
      text: 'Kanaga Durga',
      href: 'https://github.com/Kanaga-Durga316',
    },
  ],
};
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Kanaga-Durga316'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kanaga-durga-a996782a3/'},
  {label: 'Whatsapp', Icon: WhatsappIcon, href: 'https://wa.me/919965910035'},
];

