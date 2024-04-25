import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './SliderButton.css';

function SliderButton() {
  return (
    <div className="sliderButton">
      <span type="button">
        <BsChevronLeft style={{ fontSize: 24 }} />
      </span>
      <span type="button">
        <BsChevronRight style={{ fontSize: 24 }} />
      </span>
    </div>
  );
}

export default SliderButton;
