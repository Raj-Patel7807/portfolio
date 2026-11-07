import { createContext } from 'react';
import type { ThemeContextValue } from '@/types/theme';

export const THEME_STORAGE_KEY = 'portfolio_theme';

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
