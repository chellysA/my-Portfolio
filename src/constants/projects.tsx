import quoteRandomMachine from '../assets/projects-img/quoteRandomMachine.png';
import moviePage from '../assets/projects-img/moviePage.png';
import drumMachine from '../assets/projects-img/drumMachine.png';
import calculator from '../assets/projects-img/calculator.png';
import markDown from '../assets/projects-img/markDown.png';
import surveyForm from '../assets/projects-img/surveyForm.png';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';

interface ProjectsProps {
  id: number;
  img: string;
  title: string;
  details: { icon: React.JSX.Element; title: string; desc: string }[];
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    img: moviePage,
    title: 'Movie Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website.',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JS.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://movie-pages-git-master-chellysa.vercel.app/" target="blank"><u>Click here!</u>></a>',
      },
      {
        icon: <BsFileEarmarkCode />,
        title: 'Repository : ',
        desc: '<a href="https://github.com/chellysA/moviePages.git" target="blank"><u>Click here!</u>></a>',
      },
    ],
  },
  {
    id: 2,
    img: quoteRandomMachine,
    title: 'Quote Random Machine',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website.',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'J Query, JS.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://codesandbox.io/s/quote-random-machine-i0vu8f" target="blank"><u>Click here!</u>></a>',
      },
      {
        icon: <BsFileEarmarkCode />,
        title: 'Repository : ',
        desc: '<a href="https://codesandbox.io/s/quote-random-machine-i0vu8f" target="blank"><u>Click here!</u>></a>',
      },
    ],
  },
  {
    id: 3,
    img: drumMachine,
    title: 'Drum Machine',
    details: [
      { icon: <FiFileText />, title: 'Project : ', desc: 'Website.' },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JS.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://codesandbox.io/s/drum-machine-project-react-nwg21q" target="blank"><u>https://codesandbox.io/s/drum-machine-project-react-nwg21q</u>></a>',
      },
      {
        icon: <BsFileEarmarkCode />,
        title: 'Repository : ',
        desc: '<a href="https://codesandbox.io/s/drum-machine-project-react-nwg21q" target="blank"><u>https://codesandbox.io/s/drum-machine-project-react-nwg21q</u>></a>',
      },
    ],
  },
  {
    id: 4,
    img: calculator,
    title: 'Calculator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website.',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JS.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://codesandbox.io/s/calculator-project-react-wqker7" target="blank"><u>https://codesandbox.io/s/calculator-project-react-wqker7</u></a>',
      },
      {
        icon: <BsFileEarmarkCode />,
        title: 'Repository : ',
        desc: '<a href="https://codesandbox.io/s/calculator-project-react-wqker7" target="blank"><u>https://codesandbox.io/s/calculator-project-react-wqker7</u>></a>',
      },
    ],
  },
  {
    id: 5,
    img: markDown,
    title: 'Mark Down',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website.',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JS.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://codesandbox.io/s/mark-down-project-react-h6gc9j" target="blank"><u>https://codesandbox.io/s/mark-down-project-react-h6gc9j</u>></a>',
      },
      {
        icon: <BsFileEarmarkCode />,
        title: 'Repository : ',
        desc: '<a href="https://codesandbox.io/s/mark-down-project-react-h6gc9j" target="blank"><u>https://codesandbox.io/s/mark-down-project-react-h6gc9j</u>></a>',
      },
    ],
  },
  {
    id: 6,
    img: surveyForm,
    title: 'Survey Form',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website.',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, JS.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://codesandbox.io/s/form-react-project-h6kdlx" target="blank"><u>https://codesandbox.io/s/form-react-project-h6kdlx</u></a>',
      },
      {
        icon: <BsFileEarmarkCode />,
        title: 'Repository : ',
        desc: '<a href="https://codesandbox.io/s/form-react-project-h6kdlx" target="blank"><u>https://codesandbox.io/s/form-react-project-h6kdlx</u>></a>',
      },
    ],
  },
];
