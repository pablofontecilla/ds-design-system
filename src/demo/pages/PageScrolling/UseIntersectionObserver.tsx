import { useRef, useEffect, useState } from 'react';

const useIntersectionObserver = (options: any) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // The isIntersecting property is a boolean indicating visibility
        setIsVisible(entry.isIntersecting); 
        
        // Optional: stop observing once it has intersected once
        // if (entry.isIntersecting) {
        //   observer.unobserve(entry.target);
        // }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      observer.disconnect();
    };
  }, [options]); // Re-run if options change

  return { targetRef, isVisible };
};

export default useIntersectionObserver;
