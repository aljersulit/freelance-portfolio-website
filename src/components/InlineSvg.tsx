'use client';

import React, { useEffect, useState } from 'react';

interface InlineSvgProps {
  src: string;
  alt: string;
  className?: string;
  svgClassName?: string;
}

const InlineSvg: React.FC<InlineSvgProps> = ({ src, alt, className, svgClassName }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        let text = await response.text();

        // 1. Ensure viewBox exists (critical for aspect ratio)
        if (!/<svg[^>]*viewBox="[^"]*?"/.test(text)) {
          console.warn(`SVG from ${src} is missing a viewBox attribute. Aspect ratio may not be preserved.`);
        }

        // 2. Remove any lingering width/height attributes if they exist (defensive)
        // This regex is slightly more robust to whitespace.
        text = text.replace(/<svg([^>]*?)\s+(width|height)="[^"]*?"/g, '<svg$1');

        // 3. Inject svgClassName directly into the <svg> tag
        if (svgClassName) {
          text = text.replace(/<svg/, `<svg class="${svgClassName}"`);
        }
        setSvgContent(text);
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching SVG:', err);
      }
    };

    fetchSvg();
  }, [src]);

  if (error) {
    return (
      <div className={className} aria-label={`Error loading ${alt}`}>
        {alt} (Error)
      </div>
    );
  }

  if (!svgContent) {
    return (
      <div className={className} aria-label={`Loading ${alt}`}>
        Loading...
      </div>
    );
  }

  return <div className={className} dangerouslySetInnerHTML={{ __html: svgContent }} aria-label={alt} role='img' />;
};

export default InlineSvg;