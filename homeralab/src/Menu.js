import React from 'react';

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/LaBranche_Resume.pdf" target="_blank">Resume</a></li>
        <li><a href="https://github.com/HomerALaB" target="_blank"><img src="/icons8-github-90.png" alt="GitHub logo"></img></a></li>
        <li><a href="https://www.linkedin.com/in/homer-labranche-3215441a8/" target="_blank"><img src="/icons8-linkedin-100.png" alt="LinkedIn logo"></img></a></li>
      </ul>
    </nav>
  );
}

export default Menu;