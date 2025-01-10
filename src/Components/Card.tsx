import React from "react";

interface CardProps {
  years: string;
  name: string;
  position: string;
  number: number;
  height: string | null;
  weight: string | null;
  age: number | null;
  college: string | null;
  image: string | null;
}

const Card: React.FC<CardProps> = ({
  years,
  name,
  position,
  number,
  height,
  weight,
  age,
  college,
  image,
}) => {
  return (
    <div className="flip-container">
      <div className="flip-inner">
        <div className="flip-front tc bg-color br3 pa3 ma2 bw2 shadow-5 card">
          <p className="num">No. {number}</p>
          <img
            src={
              image ||
              "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png"
            }
            alt="players"
            className="h4"
          />
          <div>
            <h2>{name}</h2>
            <p>Position: {position}</p>
            <p>Experience: {years}</p>
          </div>
        </div>
        <div className="flip-back tc bg-color br3 pa3 ma2 bw2 shadow-5 card">
          <p>Age: {age}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>College: {college}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
