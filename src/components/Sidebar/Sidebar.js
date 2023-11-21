import React from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebarWrapper'>
        <div className="headerSidebar">
            <div className="imageWrapper"></div>
            <span className='titleSidebar'>Calmom's</span>
        </div>
        <div className="contentSidebar">
            <ul>
                <li><Link to="/">Beranda</Link></li>
                <li><Link to="/">Layanan Khusus</Link></li>
                <li><Link to="/">Tes Kondisi Perasaan</Link></li>
                <li><Link to="/">Profil</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar