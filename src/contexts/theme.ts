import { createContext } from 'react';

export type Theme = 'dark' | 'light' | 'system';

type ThemeProviderContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderContext = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderContext>(initialState);
