import React from 'react'

import { Menu, Tag } from 'antd'

import PropTypes from 'prop-types'

export default function VerticalMenu({ menu, isDesktop, colors }) {
  return (
    <Menu mode="inline" className="menu" multiple>
      {menu.map((item, i) =>
        i === 12 ? (
          <Menu.Item
            key={i + 1}
            title={item.title}
            icon={item.icon}
            className="menu-item"
          >
            {item.title}{' '}
            <Tag color={colors.new} title="New">
              {isDesktop ? 'New' : '!'}
            </Tag>
          </Menu.Item>
        ) : i === 13 ? (
          <Menu.Item
            key={i + 1}
            title={item.title}
            icon={item.icon}
            className="menu-item"
            disabled
          >
            {item.title}{' '}
            <Tag color={colors.pro} title="Pro">
              {isDesktop ? 'Pro' : '!'}
            </Tag>
          </Menu.Item>
        ) : (
          <Menu.Item
            key={i + 1}
            title={item.title}
            icon={item.icon}
            className="menu-item"
          >
            {item.title}
          </Menu.Item>
        )
      )}
    </Menu>
  )
}

VerticalMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  isDesktop: PropTypes.bool,
  colors: PropTypes.object,
}
