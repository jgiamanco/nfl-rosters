import React from 'react';

const Card = ({ years, name, position, id, number, height, weight, age, college }) => {


    return (
        <div className="flip-container">
            <div className="flip-inner">
                <div className="flip-front tc bg-color br3 pa3 ma2 bw2 shadow-5 card">
                    <p className="num">No. {number}</p>
                    <img src={`https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/${id}.png`} alt="players" />
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
}

export default Card;