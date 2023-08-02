import responsiveWebDesign from '../assets/certifications/responsiveWebDesign.png';
import javascript from '../assets/certifications/javascript.png';
import frontEnd from '../assets/certifications/frontEnd.png';
import bilingual from '../assets/certifications/bilingual.jpg';
import bachiller from '../assets/certifications/bachiller.jpg';

interface CertificationsProps {
  id: Number;
  src: string;
  alt: string;
}

const certifications: CertificationsProps[] = [
  {
    id: 1,
    src: frontEnd,
    alt: 'frontEnd',
  },
  {
    id: 2,
    src: javascript,
    alt: 'javascript',
  },
  {
    id: 3,
    src: responsiveWebDesign,
    alt: 'responsive web design',
  },

  {
    id: 4,
    src: bilingual,
    alt: 'bilingual',
  },
  {
    id: 5,
    src: bachiller,
    alt: 'bachiller',
  },
];

export default certifications;

