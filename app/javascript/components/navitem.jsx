import React from 'react';

const NavItem = (props) => {
  return (
    <li className="nav__item flex--center">
      <a href="#">
        <div className="nav__link">
          <span>{props.name}</span>
        </div>
      </a>
    </li>
  );
};

export default NavItem;