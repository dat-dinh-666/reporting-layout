import React from 'react'
import { Menu as AntMenu, Tag } from 'antd'

import { MdCheck, MdTrendingUp, MdArrowForward } from 'react-icons/md'
import { TiDocumentText } from 'react-icons/ti'
import { FaHandHolding } from 'react-icons/fa'

import { BsBarChart } from 'react-icons/bs'
import { FiChrome, FiMapPin, FiSmile } from 'react-icons/fi'
import { IoMdAnalytics } from 'react-icons/io'
import { CgCopy } from 'react-icons/cg'
import { FaRegImages } from 'react-icons/fa'
import { AiOutlineApartment } from 'react-icons/ai'
import { RiArrowLeftRightLine } from 'react-icons/ri'

import './styles.less'

import PropTypes from 'prop-types'

export default function Menu() {
  const MENU = [
    {
      title: 'Checks',
      icon: <MdCheck />,
    },
    {
      title: 'Inquiry',
      icon: <TiDocumentText />,
    },
    {
      title: 'Trends',
      icon: <MdTrendingUp />,
    },
    {
      title: 'Act',
      icon: <MdArrowForward />,
    },
    {
      title: 'Service',
      icon: <FaHandHolding />,
    },
    {
      title: 'Compare',
      icon: <RiArrowLeftRightLine />,
    },
    {
      title: 'Results',
      icon: <BsBarChart />,
    },
    {
      title: 'Tree',
      icon: <AiOutlineApartment />,
    },
    {
      title: 'Map',
      icon: <FiMapPin />,
    },
    {
      title: 'Analysis',
      icon: <IoMdAnalytics />,
    },
    {
      title: 'NPS',
      icon: <FiSmile />,
    },
    {
      title: 'NPS Drivers',
      icon: <FiChrome />,
    },
    {
      title: 'Documents',
      icon: <CgCopy />,
    },
    {
      title: 'Images',
      icon: <FaRegImages />,
    },
  ]

  return (
    <AntMenu mode="inline" className="menu">
      {MENU.map((item, i) =>
        i === 12 ? (
          <AntMenu.Item
            key={i + 1}
            title={item.title}
            icon={item.icon}
            className="menu-item"
          >
            {item.title}{' '}
            <Tag color="#3aa600" title="New">
              New
            </Tag>
          </AntMenu.Item>
        ) : i === 13 ? (
          <AntMenu.Item
            key={i + 1}
            title={item.title}
            icon={item.icon}
            className="menu-item"
            disabled
          >
            {item.title}{' '}
            <Tag color="#000" title="Pro">
              Pro
            </Tag>
          </AntMenu.Item>
        ) : (
          <AntMenu.Item
            key={i + 1}
            title={item.title}
            icon={item.icon}
            className="menu-item"
          >
            {item.title}
          </AntMenu.Item>
        )
      )}
    </AntMenu>
  )
}

Menu.propTypes = {
  isCollapsed: PropTypes.bool,
}
