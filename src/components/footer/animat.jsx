import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
const ScrollAnimation = () => {
    const [isVisible, setVisible] = useState(false);
  
    // React Spring hook to define animation properties
    const fade = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    });
  
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementOffset = document.getElementById('your-element-id').offsetTop;
  
      if (scrollPosition > elementOffset) {
        setVisible(true);
      }
    };
  
    // Attach scroll event listener on component mount
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div>
        <animated.div style={fade}>
          <h1>Design.Built.Launch</h1>
        </animated.div>
      </div>
    );
  };
  
  export default ScrollAnimation;
  