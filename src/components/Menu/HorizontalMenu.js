import React, { useState } from 'react'

import PropTypes from 'prop-types'

import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

import { Carousel, Layout } from 'antd'
const { Header } = Layout

export default function HorizontalMenu({ menu }) {
  const [actives, setActive] = useState([])

  const handleClick = (index) => {
    if (actives.includes(index)) {
      setActive((prevState) => [...prevState.filter((item) => item !== index)])
    } else {
      setActive((prevState) => [...prevState, index])
    }
  }

  return (
    <Header className="horizontal-menu-container">
      <Carousel
        dots={false}
        arrows
        draggable
        swipeToSlide
        infinite={false}
        slidesToShow={5}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        className="horizontal-menu"
      >
        {menu.map((item, i) =>
          i === 12 ? (
            <div
              key={i + 1}
              title={item.title}
              onClick={() => handleClick(i)}
              className={`horizontal-menu-item ${
                actives.includes(i) ? 'horizontal-menu-item-active' : ''
              }`}
            >
              {item.title}
            </div>
          ) : i === 13 ? (
            <div
              key={i + 1}
              title={item.title}
              onClick={() => handleClick(i)}
              className={`horizontal-menu-item ${
                actives.includes(i) ? 'horizontal-menu-item-active' : ''
              }`}
              disabled
            >
              {item.title}
            </div>
          ) : (
            <div
              key={i + 1}
              title={item.title}
              onClick={() => handleClick(i)}
              className={`horizontal-menu-item ${
                actives.includes(i) ? 'horizontal-menu-item-active' : ''
              }`}
            >
              {item.title}
            </div>
          )
        )}
      </Carousel>
    </Header>
  )
}

HorizontalMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
}
