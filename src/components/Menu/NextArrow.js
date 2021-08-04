import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import PropTypes from 'prop-types'

export default function NextArrow({ className, style, onClick }) {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div>
        <IoIosArrowForward />
      </div>
    </div>
  )
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}
