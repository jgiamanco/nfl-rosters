import React from 'react';

const Card = ({ years, name, position, id, number }) => {


    return (
        <div className="tc bg-color dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <p className="num">No. {number}</p>
            <img src={`https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/${id}.png`} alt="players" />
            <div>
                <h2>{name}</h2>
                <p>Position: {position}</p>
                <p>Experience: {years}</p>  
            </div>
        </div>
    );
}

export default Card;