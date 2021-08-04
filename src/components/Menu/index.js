import React from 'react'

import './styles.less'

import useDevice from '../../hooks/useDevice'
import VerticalMenu from './VerticalMenu'
import HorizontalMenu from './HorizontalMenu'
import { MENU, COLORS } from '../../config/menu'

export default function Menu() {
  const isDesktop = useDevice().device === 'desktop'

  const isMobile = useDevice().device === 'mobile'

  return isMobile ? (
    <HorizontalMenu menu={MENU} />
  ) : (
    <VerticalMenu menu={MENU} isDesktop={isDesktop} colors={COLORS} />
  )
}
