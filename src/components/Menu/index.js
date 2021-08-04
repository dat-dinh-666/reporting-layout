import React from 'react'

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

import useDevice from '../../hooks/useDevice'
import VerticalMenu from './VerticalMenu'
import HorizontalMenu from './HorizontalMenu'

const COLORS = {
  new: '#3aa600',
  pro: '#000',
}

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

  const { device } = useDevice()
  const isDesktop = device === 'desktop'
  const isMobile = device === 'mobile'

  return isMobile ? (
    <HorizontalMenu menu={MENU} />
  ) : (
    <VerticalMenu menu={MENU} isDesktop={isDesktop} colors={COLORS} />
  )
}
