import type { ReactNode } from 'react';

// Oversized section title whose text rises out of a clipped line on scroll.
export function DisplayHeading({ children }: { children: ReactNode }) {
    return (
        <h2 className="display">
            <span data-rise="">{children}</span>
        </h2>
    );
}
