import React from 'react';
import NavItem from './navitem';

const navItems = ['Stack', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <nav className="flex--space-between">
      <div id="logo">
        <h1>louisizumi</h1>
      </div>
      <div id="nav-items">
        <ul className="flex--space-around">
          {
            navItems.map((navItem) => {
              return <NavItem name={navItem} key={navItem} />;
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;