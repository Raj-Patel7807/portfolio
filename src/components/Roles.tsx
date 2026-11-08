import { Experience } from './Experience';
import { Responsibility } from './Responsibility';

/**
 * @deprecated Use <Experience /> and <Responsibility /> independently for modular section placement.
 */
export function Roles() {
    return (
        <>
            <Experience />
            <Responsibility />
        </>
    );
}

export { Experience } from './Experience';
export { Responsibility } from './Responsibility';
