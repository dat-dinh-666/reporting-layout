import React, { useEffect, useState } from 'react'
import Menu from '../Menu'
import './styles.less'

import PropTypes from 'prop-types'
import SidebarButtons from '../SidebarButtons'

import { Layout } from 'antd'

export default function Sidebar({ logoUrl }) {
  const { Sider } = Layout

  const [isCollapsed, setIsCollapsed] = useState(true)

  const handleClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false)
    }
  }

  useEffect(() => {
    let timeoutId = null
    if (!isCollapsed) {
      timeoutId = setTimeout(() => {
        setIsCollapsed(true)
      }, 2000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isCollapsed])

  return (
    // !TODO CHANGE WIDTH WHEN IPSECT DESIN
    <Sider
      className="sidebar"
      width="250px"
      collapsible
      defaultCollapsed
      collapsedWidth={100}
      collapsed={isCollapsed}
      trigger={null}
      onClick={handleClick}
    >
      <div className="logo">
        <img
          src={logoUrl ?? 'http://picsum.photos/300/50'}
          height="50"
          alt="Logo"
        />
      </div>
      <Menu isCollapsed={isCollapsed} />
      <SidebarButtons />
      <div className="sidebar-footer">
        <p>ISC-CX &copy; {new Date().getFullYear()}</p>
      </div>
    </Sider>
  )
}

Sidebar.propTypes = {
  logoUrl: PropTypes.string,
}
