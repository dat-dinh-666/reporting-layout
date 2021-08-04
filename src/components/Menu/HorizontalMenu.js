import React from 'react'

import PropTypes from 'prop-types'
import { Carousel } from 'antd'

export default function HorizontalMenu({ menu }) {
  return (
    <Carousel
      dots={false}
      arrows
      draggable
      swipeToSlide
      slidesToShow={5}
      slidesToScroll={1}
      className="horizontal-menu"
    >
      {menu.map((item, i) =>
        i === 12 ? (
          <div key={i + 1} title={item.title} className="horizontal-menu-item">
            {item.title}{' '}
          </div>
        ) : i === 13 ? (
          <div
            key={i + 1}
            title={item.title}
            className="horizontal-menu-item"
            disabled
          >
            {item.title}{' '}
          </div>
        ) : (
          <div key={i + 1} title={item.title} className="horizontal-menu-item">
            {item.title}
          </div>
        )
      )}
    </Carousel>
  )
}

HorizontalMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
}
