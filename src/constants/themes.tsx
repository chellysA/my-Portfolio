import ciruela from '../assets/paleta-de-colores/ciruela.png';
import blue from '../assets/paleta-de-colores/blue.png';
import pink from '../assets/paleta-de-colores/pink.png';
import red from '../assets/paleta-de-colores/red.png';
import yellow from '../assets/paleta-de-colores/yellow.png';
import purple from '../assets/paleta-de-colores/purple.png';
import orange from '../assets/paleta-de-colores/orange.png';
import pPink from '../assets/paleta-de-colores/pPink.png';
import pGreen from '../assets/paleta-de-colores/pGreen.png';
import pastelPink from '../assets/paleta-de-colores/pastelPink.png';
import wine from '../assets/paleta-de-colores/wine.png';
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
  { id: 8, img: pPink, color: 'pPink' },
  { id: 9, img: pGreen, color: 'pastelGreen' },
  { id: 10, img: pastelPink, color: 'pastelPink' },
  { id: 11, img: wine, color: 'wine' },
  { id: 12, img: green, color: 'green' },
];
