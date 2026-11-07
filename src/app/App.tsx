import React from 'react';
import { Container, Button, TextLink, Divider, SectionLabel, ThemeToggle } from '@/components';
import { useTheme } from '@/hooks/useTheme';

export const App: React.FC = () => {
    const { theme, resolvedTheme } = useTheme();

    return (
        <div style={{ minHeight: '100vh', padding: 'var(--space-8) 0' }}>
            <Container>
                <header
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 'var(--space-12)',
                    }}
                >
                    <div>
                        <SectionLabel number="00" label="Editorial Foundation" />
                        <h1>Raj Patel</h1>
                        <p>Design System & Theme Architecture Active</p>
                    </div>
                    <ThemeToggle />
                </header>

                <Divider spacing="md" />

                <section style={{ marginBottom: 'var(--space-12)' }}>
                    <SectionLabel number="01" label="Theme Status" />
                    <h2>
                        Current Mode: {theme} ({resolvedTheme})
                    </h2>
                    <p style={{ margin: 'var(--space-4) 0' }}>
                        Typography scale, responsive clamps, CSS variables, and zero-runtime tokens
                        are functioning.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                        <Button variant="primary">Primary Action</Button>
                        <Button variant="secondary">Secondary Action</Button>
                        <Button variant="ghost">Ghost Action</Button>
                    </div>
                </section>

                <Divider spacing="md" />

                <footer>
                    <p>
                        Explore{' '}
                        <TextLink href="#editorial" isExternal>
                            Editorial Architecture
                        </TextLink>
                    </p>
                </footer>
            </Container>
        </div>
    );
};

export default App;
