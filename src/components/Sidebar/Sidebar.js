import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const DropdownMenu = ({ isOpen, children }) => {
  const dropdownStyle = {
    maxHeight: isOpen ? '200px' : '0',
    transition: 'max-height 0.3s ease-in-out',
    overflow: 'hidden',
  };

  return <ul className="dropdown-menu" style={dropdownStyle}>{children}</ul>;
};

const SidebarLink = ({ to, label, dropdownItems }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const linkStyle = {
    backgroundColor: isActive ? '#BAD6EA' : '',
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <li>
      <div className="sidebar-link-wrapper">
        <Link to={to} style={linkStyle} onClick={handleDropdownToggle}>
          {label}
        </Link>
        <DropdownMenu isOpen={isDropdownOpen}>
          {dropdownItems &&
            dropdownItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
        </DropdownMenu>
      </div>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <div className="headerSidebar">
        <div className="imageWrapper"></div>
        <span className="titleSidebar">Calmom's</span>
      </div>
      <div className="contentSidebar">
        <ul>
          <SidebarLink to="/" label="Beranda" />
          <SidebarLink
            to="#"
            label="Layanan Khusus"
            dropdownItems={[
              { to: '#', label: 'Konsultasi Online' },
              { to: '/forum-discussion', label: 'Forum Diskusi' },
              { to: '/meditation', label: 'Meditasi' },
            ]}
          />
          <SidebarLink to="/test-kondisi" label="Tes Kondisi Perasaan" />
          <SidebarLink to="/profile" label="Profil" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
