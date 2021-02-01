import React from 'react'

import Logo from '../assets/img/Logo.svg';
import AltMenu from '../assets/img/AltMenu.svg';

const MenuItem = ({ menuTitle }) => {
  return (
    <ul className="c-sidebar-nav">
      <li className="c-sidebar-nav-item">
        <a className="c-sidebar-nav-link" href="#">
          <div className="c-sidebar-nav-icon">
            <AltMenu />
          </div>
          {menuTitle}
        </a>
      </li>
    </ul>
  )
}
const SideBar = () => {
  return (
    <div className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" style={{ backgroundColor: "black" }} id="sidebar">
      <div className="c-sidebar-brand p-3" >
        <Logo />
      </div>
      <MenuItem menuTitle="Menu 1" />
      <MenuItem menuTitle="Menu 2" />
      <button className="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
    </div>
  );
};

export default SideBar;