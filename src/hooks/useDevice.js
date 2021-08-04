import { useEffect, useState } from 'react'

import { Grid } from 'antd'

const { useBreakpoint } = Grid

export default function useDevice() {
  const screens = useBreakpoint()

  const [device, setDevice] = useState('desktop')

  useEffect(() => {
    const breakPoints = Object.entries(screens)
      .filter((screen) => screen[1])
      .map((screen) => screen[0])

    if (breakPoints.includes('xs')) {
      setDevice('mobile')
    } else if (breakPoints.includes('xl')) {
      setDevice('desktop')
    } else {
      setDevice('tablet')
    }
  }, [screens])

  return { device }
}
