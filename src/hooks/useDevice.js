import { useEffect, useRef } from 'react'

import { Grid } from 'antd'

const { useBreakpoint } = Grid

export default function useDevice() {
  const screens = useBreakpoint()

  const device = useRef('desktop')

  useEffect(() => {
    const breakPoints = Object.entries(screens)
      .filter((screen) => screen[1])
      .map((screen) => screen[0])

    if (breakPoints.includes('xs')) {
      device.current = 'mobile'
    } else if (breakPoints.includes('xl')) {
      device.current = 'desktop'
    } else {
      device.current = 'tablet'
    }
  }, [screens])

  return { device: device.current }
}
