import { useState } from 'react';
import { skillCategories } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import { TechIcon } from './TechIcon';
import './Stack.css';

export function Stack() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories = ['All', ...skillCategories.map(c => c.category)];

    // When "All" is active, deduplicate by tech name so skills listed in multiple categories appear only once
    const rawSkills = skillCategories
        .filter(c => activeCategory === 'All' || c.category === activeCategory)
        .flatMap(c => c.items.map(item => ({ name: item, category: c.category })));

    const filteredSkills =
        activeCategory === 'All'
            ? Array.from(new Map(rawSkills.map(item => [item.name, item])).values())
            : rawSkills;

    const totalUniqueSkills = Array.from(new Set(skillCategories.flatMap(c => c.items))).length;

    return (
        <section id="stack" className="section">
            <div className="section-head">
                <DisplayHeading>
                    Tech Stack<sup>({String(totalUniqueSkills).padStart(2, '0')})</sup>
                </DisplayHeading>
                <div data-reveal="" className="mono-label">
                    Core Technologies & Infrastructure
                </div>
            </div>

            {/* Minimal Filter Tabs */}
            <div className="stack__filter-bar" data-reveal="">
                {categories.map(cat => {
                    const count =
                        cat === 'All'
                            ? totalUniqueSkills
                            : (skillCategories.find(c => c.category === cat)?.items.length ?? 0);
                    return (
                        <button
                            key={cat}
                            type="button"
                            className={
                                activeCategory === cat ? 'stack__tab is-active' : 'stack__tab'
                            }
                            onClick={() => setActiveCategory(cat)}
                        >
                            <span>{cat}</span>
                            <span className="stack__tab-count">
                                {String(count).padStart(2, '0')}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Compact Minimal Logo Grid */}
            <div className="rule-top stack__grid" data-reveal="">
                {filteredSkills.map(tech => (
                    <div key={tech.name} className="stack__item" data-cursor={tech.name}>
                        <div className="stack__icon-wrap">
                            <TechIcon name={tech.name} className="stack__icon" />
                        </div>
                        <span className="stack__item-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
