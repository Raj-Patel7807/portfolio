import { gallery, showGallery, type GalleryItem } from '@/data/content';
import { useLiveStats } from '@/hooks/useLiveStats';
import { useRevealObserver } from '@/hooks/useReveal';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Cursor } from '@/components/Cursor';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Gallery } from '@/components/Gallery';
import { GitHubSection } from '@/components/GitHubSection';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Nav } from '@/components/Nav';
import { NowBuilding } from '@/components/NowBuilding';
import { Proof } from '@/components/Proof';
import { Responsibility } from '@/components/Responsibility';
import { Scoreboard } from '@/components/Scoreboard';
import { Stack } from '@/components/Stack';
import { Work } from '@/components/Work';

export default function App() {
    useRevealObserver();
    const { cf, github } = useLiveStats();

    return (
        <>
            <Cursor />
            <Nav />
            <main>
                <Hero />
                <Marquee />

                <Proof cf={cf} />

                <About />

                <Work />
                <NowBuilding />

                <Experience />

                <Stack />

                <Scoreboard cf={cf} />

                <Responsibility />

                <Education />
                <GitHubSection github={github} />
                {showGallery && gallery.some((g: GalleryItem) => Boolean(g.image)) && <Gallery />}
                <Contact />
            </main>
        </>
    );
}
