import React, { useState } from 'react'
import Menu from '../Menu'
import './styles.less'

import PropTypes from 'prop-types'
import SidebarButtons from '../SidebarButtons'

export default function Sidebar({ logoUrl }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handleClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(false)
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar-inner" onClick={handleClick}>
        <div className="logo">
          <img
            src={logoUrl ?? 'http://picsum.photos/200/50'}
            height="50"
            alt="Logo"
          />
        </div>
        <Menu />
        <SidebarButtons />
        <div className="sidebar-footer">
          <p>ISC-CX &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  logoUrl: PropTypes.string,
}
