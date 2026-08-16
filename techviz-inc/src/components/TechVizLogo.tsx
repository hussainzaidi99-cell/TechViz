import React from 'react';
import fullLogo from '../assets/images/Logo_transparent.png ';
import tvIconLogo from '../assets/images/Icon .png';

interface TechVizLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  showText?: boolean;
  lightMode?: boolean;
  className?: string;
}

export const TechVizLogo: React.FC<TechVizLogoProps> = ({ 
  size = 'md', 
  iconOnly = false,
  showText = true,
  className = '' 
}) => {
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-16 sm:h-20'
  };

  const isIconOnly = iconOnly || !showText;
  const logoSrc = isIconOnly ? tvIconLogo : fullLogo;

  return (
    <div className={`inline-flex items-center select-none ${heights[size]} ${className}`}>
      <img 
        src={logoSrc} 
        alt="TechViz Inc. Logo" 
        className="h-full w-auto object-contain max-h-full rounded-lg"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
