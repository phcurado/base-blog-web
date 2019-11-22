import React from 'react';

import './navigator.scss';

const navigator = props => {
  const renderNav = () => {
    return props.navList.map(nav => <li>{nav}</li>);
  };

  return (
    <nav className="navigator">
      <ul>{renderNav()}</ul>
    </nav>
  );
};

export default navigator;
