import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Intro() {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Homer LaBranche.";
  const i = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.substring(0, i.current) + '|');
      i.current++;
      if (i.current > fullText.length) {
        clearInterval(interval);
        setText(fullText);
      }
    }, 75);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="typing">
      {text}
    </div>
  );
}

export default Intro;
