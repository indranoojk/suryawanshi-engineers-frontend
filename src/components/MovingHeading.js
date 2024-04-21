import React, { useEffect, useRef } from 'react';

const MovingHeading = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const headingElement = headingRef.current;
    const initialOffset = headingElement.offsetTop;
    const targetOffset = initialOffset - 50; // Set the target offset to move the heading up by 50 pixels

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > targetOffset) {
        headingElement.style.transform = `translateY(-${scrollPosition - targetOffset}px)`;
      } else {
        headingElement.style.transform = `translateY(0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <h1 ref={headingRef} className="text-4xl font-bold text-center text-blue-500 mt-16 mb-12">
      Welcome to Our Construction and Interior Design Company
    </h1>
  );
};

export default MovingHeading;