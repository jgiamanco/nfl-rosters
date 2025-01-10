import React, { useState, useEffect } from "react";
import Card from "./Card";
import playerData from "../player_data.json";

interface Player {
  PlayerID: number;
  Name: string;
  Position: string;
  ExperienceString: string;
  Number: number;
  Height: string | null;
  Weight: string | null;
  Age: number | null;
  College: string | null;
  UsaTodayHeadshotNoBackgroundUrl: string | null;
}

interface CardListProps {
  team: Player[];
}

interface PlayerData {
  id: string;
  name: string;
}

const fetchPlayerData = async (): Promise<PlayerData[]> => {
  return playerData;
};

const fetchPlayerIdByName = async (
  playerName: string
): Promise<string | false> => {
  const players = await fetchPlayerData();
  const player = players.find(
    (p) => p.name.toLowerCase() === playerName.toLowerCase()
  );
  if (player) {
    return player.id;
  }
  return false;
};

const checkImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    return false;
  }
};

const CardList: React.FC<CardListProps> = ({ team }) => {
  const [playerImages, setPlayerImages] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    const fetchImages = async () => {
      const images: { [key: string]: string } = {};
      for (const player of team) {
        const playerId = await fetchPlayerIdByName(player.Name);
        if (playerId !== false) {
          const nflUrl = `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${playerId}.png&w=350&h=254`;
          const collegeUrl = `https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/${playerId}.png&w=350&h=254`;

          const isNflUrlValid = await checkImageUrl(nflUrl);
          images[player.Name] = isNflUrlValid ? nflUrl : collegeUrl;
        } else {
          images[player.Name] =
            "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png";
        }
      }
      setPlayerImages(images);
    };

    fetchImages();
  }, [team]);

  return (
    <div className="card-container">
      {team.map((player, i) => (
        <Card
          key={i}
          image={playerImages[player.Name]}
          name={player.Name}
          position={player.Position}
          years={player.ExperienceString}
          number={player.Number}
          height={player.Height}
          weight={player.Weight}
          age={player.Age}
          college={player.College}
        />
      ))}
    </div>
  );
};

export default CardList;
