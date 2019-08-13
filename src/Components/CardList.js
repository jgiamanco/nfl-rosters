import React from 'react';
import Card from './Card.js';


const CardList = ({team}) => {
    return (
        <div>
            {
                team.map((player, i) => {
                    return (
                        <Card 
                            key={i}
                            id={team[i].PhotoUrl !== "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png" ? team[i].PlayerID : 0} 
                            name={team[i].Name} 
                            position={team[i].Position}
                            years={team[i].Experience} 
                        />
                    );        
                })
            }
        </div>
    );
}

export default CardList;