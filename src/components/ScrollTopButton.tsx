import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

export const ScrollTopButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, []);

  const checkScrollTop = (): void => {
    if (!showScroll && window.pageYOffset > 20) setShowScroll(true);
    else if (showScroll || window.pageYOffset <= 200) setShowScroll(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FontAwesomeIcon
      icon={faArrowAltCircleUp}
      onClick={scrollTop}
      size='3x'
      className='scrollTop'
      style={{ display: showScroll ? 'inline' : 'none' }}
    />
  );
};
