import { useContext } from 'react';
import { ThemeContext } from '@/app/providers/ThemeContext';
import type { ThemeContextValue } from '@/types/theme';

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default useTheme;
