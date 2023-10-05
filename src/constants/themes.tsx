import ciruela from '../assets/paleta-de-colores/ciruela.png';
import blue from '../assets/paleta-de-colores/blue.png';
import pink from '../assets/paleta-de-colores/pink.png';
import red from '../assets/paleta-de-colores/red.png';
import yellow from '../assets/paleta-de-colores/yellow.png';
import purple from '../assets/paleta-de-colores/purple.png';
import orange from '../assets/paleta-de-colores/orange.png';
import pBlue from '../assets/paleta-de-colores/pBlue.png';
import pGreen from '../assets/paleta-de-colores/pGreen.png';
import pRed from '../assets/paleta-de-colores/pRed.png';
import pYellow from '../assets/paleta-de-colores/pYellow.png';
import green from '../assets/paleta-de-colores/green.png';

interface ThemesProps {
  id: Number;
  img: string;
  color: string;
}

export const themes: ThemesProps[] = [
  { id: 1, img: ciruela, color: 'ciruela' },
  { id: 2, img: blue, color: 'blue' },
  { id: 3, img: pink, color: 'pink' },
  { id: 4, img: red, color: 'red' },
  { id: 5, img: yellow, color: 'yellow' },
  { id: 6, img: purple, color: 'purple' },
  { id: 7, img: orange, color: 'orange' },
  { id: 8, img: pBlue, color: 'pastelBlue' },
  { id: 9, img: pGreen, color: 'pastelGreen' },
  { id: 10, img: pRed, color: 'pastelRed' },
  { id: 11, img: pYellow, color: 'pastelYellow' },
  { id: 12, img: green, color: 'green' },
];

