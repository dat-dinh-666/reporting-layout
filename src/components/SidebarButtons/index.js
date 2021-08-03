import React from 'react'

import { BsArrow90DegRight } from 'react-icons/bs'
import { IoIosOptions } from 'react-icons/io'

import { Menu as AntMenu } from 'antd'

import './styles.less'

export default function SidebarButtons() {
  return (
    <AntMenu mode="inline" className="sidebar-buttons">
      <AntMenu.Item
        key={1}
        title="Fillters"
        icon={<IoIosOptions />}
        className="sidebar-button"
      >
        Filters
      </AntMenu.Item>
      <AntMenu.Item
        key={2}
        title="Export All"
        icon={<BsArrow90DegRight />}
        className="sidebar-button"
      >
        Export All
      </AntMenu.Item>
    </AntMenu>
  )
}
