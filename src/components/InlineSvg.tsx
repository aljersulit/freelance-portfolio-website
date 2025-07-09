'use client';

import React, { useEffect, useState } from 'react';

interface InlineSvgProps {
  src: string;
  alt: string;
  className?: string;
}

const InlineSvg: React.FC<InlineSvgProps> = ({ src, alt, className }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        const text = await response.text();
        setSvgContent(text);
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching SVG:', err);
      }
    };

    fetchSvg();
  }, [src]);

  if (error) {
    return <div className={className} aria-label={`Error loading ${alt}`}>{alt} (Error)</div>;
  }

  if (!svgContent) {
    return <div className={className} aria-label={`Loading ${alt}`}>Loading...</div>;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      aria-label={alt}
      role="img"
    />
  );
};

export default InlineSvg;