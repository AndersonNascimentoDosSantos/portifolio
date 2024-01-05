import React from "react";

interface CardProps {
  emoji: string;
  heading: string;
  detail: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ emoji, heading, detail, color }) => {
  return (
    <div className=" light:bg-white  dark:bg-transparent w-[15rem] h-[fit-content] absolute flex flex-col gap-3 items-center text-center bg-opacity-[26]  border border-solid shadow rounded-lg p-2 sm:text-left span:nth-of-type(2):text-gray-500 span:nth-of-type(2):text-sm [>img]:transform [>img]:scale-40 [>img]:mb-[-2.2rem] [>img]:mt-[-1rem]">
      <img src={emoji} alt="" />
      <span className="text-tertiary">{heading}</span>
      <span className="light:text-gray-500 text-sm text-left dark:text-white">
        {detail}
      </span>
      {/* <button className="bg-white  rounded-md border-none p-2 text-base text-blue-500 mt-auto transition-transform hover:transform hover:scale-110 hover:cursor-pointer">
        LEARN MORE
      </button> */}
    </div>
  );
};

export default Card;
