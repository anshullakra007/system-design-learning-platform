import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#0f0f0f',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#333333',
    lineColor: '#555555',
    secondaryColor: '#1a1a1a',
    tertiaryColor: '#000000',
    noteBkgColor: '#222222',
    noteTextColor: '#ffffff',
    noteBorderColor: '#444444'
  },
  securityLevel: 'loose',
});

export default function Mermaid({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && chart) {
      mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart).then((result) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = result.svg;
        }
      }).catch(() => {
        // silently handle mermaid errors
      });
    }
  }, [chart]);

  return <div className="mermaid-container" ref={containerRef} />;
}
