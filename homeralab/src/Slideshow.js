import React, { useState, useEffect, useRef } from 'react';

function Slideshow({ id }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/ferns.jpg", "/lighthouse.jpg", "/grass.jpg", "/ledge.jpg", "/stump.jpg", "/chipmunk.jpg", "/shore.jpg", "/tree.jpg", "/steps.jpg"];
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <div className="slideshow" id={id}>
      <h1>Portfolio</h1>
      <p>In my free time and as part of my internship last summer, I shoot film photography. Here are some of my favorites that I've taken:</p>
      <img src={images[currentIndex]} />
      <div className="slideshow-buttons">
        <button onClick={() => setCurrentIndex(prevIndex => (prevIndex + images.length - 1) % images.length)}>Previous</button>
        <button onClick={() => setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)}>Next</button>
      </div>
    </div>
  );
}


export default Slideshow;
