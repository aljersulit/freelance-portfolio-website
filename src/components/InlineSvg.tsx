'use client';

import React, { useEffect, useState } from 'react';
import Spinner from '@/components/ui/spinner';

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

        // 1. Remove any lingering width/height attributes if they exist (defensive)
        // This regex is slightly more robust to whitespace.
        text = text.replace(/<svg([^>]*?)\s+(width|height)="[^"]*?"/g, '<svg$1');

        // 2. Inject svgClassName directly into the <svg> tag
        if (svgClassName) {
          text = text.replace(/<svg/, `<svg class="${svgClassName}"`);
        }
        setSvgContent(text);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          console.error('Error fetching SVG:', err.message, err);
        } else {
          setError('An unexpected error occurred.');
          console.error('An unexpected error occurred:', err);
        }
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
    return <Spinner />;
  }

  return <div className={className} dangerouslySetInnerHTML={{ __html: svgContent }} aria-label={alt} role='img' />;
};

export default InlineSvg;