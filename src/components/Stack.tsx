import { useState } from 'react';
import { skillCategories, skills } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import './Stack.css';

export function Stack() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = ['All', ...skillCategories.map(c => c.category)];

    const filteredSkills = skillCategories
        .filter(c => activeCategory === 'All' || c.category === activeCategory)
        .flatMap(c => c.items.map(item => ({ name: item, category: c.category })))
        .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    return (
        <section id="stack" className="section">
            <div className="section-head">
                <DisplayHeading>
                    Tech Stack<sup>({String(skills.length).padStart(2, '0')})</sup>
                </DisplayHeading>
                <div data-reveal="" className="mono-label">
                    Engineering Toolkit & Architecture
                </div>
            </div>

            {/* Interactive Engineering Filter Deck */}
            <div className="stack__control-bar" data-reveal="">
                <div className="stack__tabs" role="tablist" aria-label="Filter skill category">
                    {categories.map(cat => {
                        const count =
                            cat === 'All'
                                ? skills.length
                                : (skillCategories.find(c => c.category === cat)?.items.length ??
                                  0);
                        return (
                            <button
                                key={cat}
                                type="button"
                                role="tab"
                                aria-selected={activeCategory === cat}
                                className={
                                    activeCategory === cat ? 'stack__tab is-active' : 'stack__tab'
                                }
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                                <span className="stack__tab-count">{count}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="stack__search">
                    <span className="stack__search-prompt">$ filter:</span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search tech..."
                        aria-label="Filter technologies"
                        className="stack__search-input"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            className="stack__search-clear"
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear filter"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* Matrix Engineering Grid */}
            <div className="stack__matrix" data-reveal="">
                {filteredSkills.length > 0 ? (
                    filteredSkills.map((tech, idx) => (
                        <div
                            key={tech.name}
                            className="stack__tile"
                            data-cursor={tech.category}
                            style={{ animationDelay: `${idx * 0.03}s` }}
                        >
                            <div className="stack__tile-header">
                                <span className="stack__tile-code">
                                    SYS_{String(idx + 1).padStart(2, '0')}
                                </span>
                                <span className="stack__tile-tag">{tech.category}</span>
                            </div>
                            <div className="stack__tile-body">
                                <span className="stack__tile-name">{tech.name}</span>
                            </div>
                            <div className="stack__tile-footer">
                                <span className="stack__tile-status">
                                    <span className="stack__tile-dot" /> active
                                </span>
                                <span className="stack__tile-bracket">[ ]</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="stack__empty">
                        <span className="mono-label">
                            No matching technologies for &quot;{searchQuery}&quot;
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
}
