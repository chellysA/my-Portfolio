import chellys from '../assets/photos/chellys.jpg';
import chellys1 from '../assets/photos/chellys1.png';
import chellys2 from '../assets/photos/chellys2.jpg';
import chellys3 from '../assets/photos/chellys3.jpg';
import chellys4 from '../assets/photos/chellys4.png';
import chellys5 from '../assets/photos/chellys5.jpg';
import civil from '../assets/photos/civil.jpg';
import boda from '../assets/photos/boda.jpg';

interface AlbumProps {
  id: number;
  src: string;
  alt: string;
}
export const album: AlbumProps[] = [
  {
    id: 1,
    src: chellys,
    alt: 'picture1',
  },
  /* {
    id: 2,
    src: chellys1,
    alt: 'picture2',
  },
  {
    id: 3,
    src: chellys2,
    alt: 'picture3',
  },
  { id: 4, src: chellys3, alt: 'picture4' },
  {
    id: 5,
    src: chellys4,
    alt: 'picture5',
  },
  {
    id: 6,
    src: chellys5,
    alt: 'picture6',
  },
  {
    id: 7,
    src: civil,
    alt: 'couple',
  },
  {
    id: 8,
    src: boda,
    alt: 'our wedding',
  },*/
];

