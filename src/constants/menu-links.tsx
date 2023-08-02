import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

interface IMenuLinksProps {
  name: string;
  icon: React.JSX.Element;
  to: string;
}

const links: IMenuLinksProps[] = [
  { name: 'Home', icon: <FaHome className="nav--icon" />, to: '/' },
  {
    name: 'About',
    icon: <FaUser className="nac--icon" />,
    to: '/about',
  },
  {
    name: 'Porfolio',
    icon: <FaFolderOpen className="nav--icon" />,
    to: '/portfolio',
  },
  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className="nav--icon" />,
    to: '/contact',
  },
];

export default links;

