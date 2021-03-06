import React from 'react';
import nav from './navigationLinks';
import { Link } from 'react-router-dom';

import './navigator.scss';

const Navigator = () => {
  return <nav className="navigator">{renderModule()}</nav>;
};

const renderModule = () => Object.keys(nav).map(key => renderNav(nav[key], key));

const renderNav = (mod, key) => {
  let title;
  if (mod.title) {
    title = <h2 className="nav-title">{mod.title}</h2>;
  }
  return (
    <div key={key} className="nav-container">
      {title}
      <ul>
        {mod.links.map((x, i) => (
          <li key={i}>
            <Link className="nav-link" to={x.to} onClick={x.action}>
              {x.icon}
              <span className="nav-link-text">{x.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigator;
