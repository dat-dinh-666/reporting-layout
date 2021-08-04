import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import PropTypes from 'prop-types'

export default function PrevArrow({ className, style, onClick }) {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div>
        <IoIosArrowBack />
      </div>
    </div>
  )
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}
