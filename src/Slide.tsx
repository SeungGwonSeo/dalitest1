import React from "react";

interface ISliderItemProps {
    item: string;
  }

const Slide: React.FC<ISliderItemProps> = ({ item }) => {
  return <div className="slider-item">{item}</div>;
};
  
export default Slide;