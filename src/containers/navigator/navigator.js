import React from 'react';
import nav from './navigationLinks';
import { Link } from 'react-router-dom';

import './navigator.scss';

const navigator = props => {
  return <nav className="navigator">{renderModule()}</nav>;
};

const renderModule = () => Object.keys(nav).map(key => renderNav(nav[key]));

const renderNav = mod => {
  let title;
  if (mod.title) {
    title = <h2 className="nav-title">{mod.title}</h2>;
  }
  return (
    <div className="nav-container">
      {title}
      <ul>
        {mod.links.map(x => (
          <li>
            <Link className="nav-link" to={x.to}>
              {x.icon}
              <span className="nav-link-text">{x.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default navigator;
