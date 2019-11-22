import React from 'react';

import './navigator.scss';

const navigator = () => {
  return (
    <nav className="navigator">
      <ul>
        <li>
          <a href="#">Página inicial</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default navigator;
