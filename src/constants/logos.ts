import html from '../assets/logos/html.png';
import css from '../assets/logos/css.png';
import js from '../assets/logos/js.png';
import react from '../assets/logos/react.png';
import github from '../assets/logos/github.png';
import npm from '../assets/logos/npm.png';
import vscode from '../assets/logos/vscode.png';
import hookform from '../assets/logos/hookform.png';
import typescript from '../assets/logos/typescript.png';
import nextLogo from "../assets/logos/nextLogo.png"

interface LogosProps {
  id: number;
  src: string;
  alt: string;
}

const logos: LogosProps[] = [
  {
    id: 1,
    src: html,
    alt: 'html',
  },
  {
    id: 2,
    src: css,
    alt: 'css',
  },
  {
    id: 3,
    src: js,
    alt: 'js',
  },
  {
    id: 4,
    src: react,
    alt: 'react',
  },
  { id: 5, src: github, alt: 'github' },
  {
    id: 6,
    src: npm,
    alt: 'npm',
  },
  {
    id: 7,
    src: vscode,
    alt: 'vscode',
  },
  {
    id: 8,
    src: hookform,
    alt: 'hookform',
  },
  {
    id: 9,
    src: typescript,
    alt: 'typescript',
  },
  {
    id: 10,
    src: nextLogo,
    alt: 'next'
  }
];

export default logos;

