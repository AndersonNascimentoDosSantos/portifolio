import React from "react";

interface CardProps {
  emoji: string;
  heading: string;
  detail: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card">
      <img
        src={emoji}
        alt=""
        className="transform scale-50 mb-[-2.2rem] mt-[-1rem]"
      />
      <span>{heading}</span>
      <span className="text-gray-500 text-sm text-left">{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
