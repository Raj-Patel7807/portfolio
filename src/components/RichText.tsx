import React from 'react';

/**
 * Parses markdown-style bold syntax: `**word**` or `<b>word</b>`
 * into a safe React element array with strong emphasis.
 */
export function formatRichText(text: string): React.ReactNode {
    if (!text.includes('**') && !text.includes('<b>')) {
        return text;
    }

    // Split on **bold** and <b>bold</b>
    const regex = /(\*\*.*?\*\*|<b>.*?<\/b>)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            const inner = part.slice(2, -2);
            return (
                <strong key={index} className="rich-bold">
                    {inner}
                </strong>
            );
        }
        if (part.startsWith('<b>') && part.endsWith('</b>')) {
            const inner = part.slice(3, -4);
            return (
                <strong key={index} className="rich-bold">
                    {inner}
                </strong>
            );
        }
        return part;
    });
}
