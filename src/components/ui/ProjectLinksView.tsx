import React from 'react';
import type { ProjectLinks } from '@/types/project';
import { TextLink } from '@/components';
import styles from './ProjectLinksView.module.css';

export interface ProjectLinksViewProps {
    links?: ProjectLinks;
    className?: string;
}

export const ProjectLinksView: React.FC<ProjectLinksViewProps> = ({ links, className = '' }) => {
    if (!links) return null;

    return (
        <div className={`${styles.linksContainer} ${className}`.trim()}>
            {links.github && (
                <TextLink href={links.github} isExternal>
                    Source Code
                </TextLink>
            )}
            {links.live && (
                <TextLink href={links.live} isExternal>
                    Live System
                </TextLink>
            )}
            {links.demo && (
                <TextLink href={links.demo} isExternal>
                    Interactive Demo
                </TextLink>
            )}
            {links.docs && (
                <TextLink href={links.docs} isExternal>
                    Documentation
                </TextLink>
            )}
        </div>
    );
};

export default ProjectLinksView;
