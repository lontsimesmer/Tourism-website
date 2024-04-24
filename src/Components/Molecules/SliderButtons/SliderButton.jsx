import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './SliderButton.css';

function SliderButton() {
  return (
    <div className="sliderButton">
      <button type="button">
        <BsChevronLeft style={{ fontSize: 24 }} />
      </button>
      <button type="button">
        <BsChevronRight style={{ fontSize: 24 }} />
      </button>
    </div>
  );
}

export default SliderButton;
