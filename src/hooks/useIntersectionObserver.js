import { useEffect, useState, useRef } from 'react';

function useIntersectionObserver(options) {
  const [entry, setEntry] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      setEntry(entry);
      
      // Set visibility state based on intersection
      setIsVisible(entry.isIntersecting);
    }, options);

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, options]);

  return [setNode, entry, isVisible];
}

export default useIntersectionObserver; 