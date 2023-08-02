import { ReactNode } from 'react';
import ThemeProviders from '../providers/ThemeProviders';

interface IProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: IProvidersProps) => <ThemeProviders>{children}</ThemeProviders>;

export default Providers;

