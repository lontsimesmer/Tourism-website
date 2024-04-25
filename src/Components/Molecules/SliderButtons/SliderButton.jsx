import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './SliderButton.css';

function SliderButton() {
  return (
    <div className="sliderButton">
      <span>
        <BsChevronLeft style={{ fontSize: 24 }} />
      </span>
      <span>
        <BsChevronRight style={{ fontSize: 24 }} />
      </span>
    </div>
  );
}

export default SliderButton;
