import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100): string => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const id = sectionIds[i];
                const element = document.getElementById(id);
                if (element) {
                    const top = element.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveId(id);
                        return;
                    }
                }
            }

            // If at top
            if (window.scrollY < offset) {
                setActiveId('');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeId;
};

export default useScrollSpy;
