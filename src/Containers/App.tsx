import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import DropdownTeamSelection from "../Components/DropdownTeamSelection";
import "./App.css";

const API_KEY = process.env.REACT_APP_NFL_API_KEY;

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
  PhotoUrl: string;
  UsaTodayHeadshotNoBackgroundUrl: string | null;
}

interface AppState {
  team: Player[];
  searchfield: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      team: [],
      searchfield: "",
    };
  }

  escapeDoubleQuotes = (players: Player[]): Player[] => {
    return players.map((player) => {
      if (player.Height) {
        player.Height = player.Height.replace(/(['"])(.*?)\1/g, "$1$2\\$1");
      }
      return player;
    });
  };

  parseJSON = (response: Response) => {
    return response.text().then((text) => {
      if (!text) return {};

      const jsonObject = JSON.parse(text);

      const escapeDoubleQuotesInValues = (obj: any): any => {
        if (typeof obj === "string") {
          return obj.replace(/"/g, '"');
        } else if (Array.isArray(obj)) {
          return obj.map(escapeDoubleQuotesInValues);
        } else if (typeof obj === "object" && obj !== null) {
          const newObj: any = {};
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              newObj[key] = escapeDoubleQuotesInValues(obj[key]);
            }
          }
          return newObj;
        }
        return obj;
      };

      return escapeDoubleQuotesInValues(jsonObject);
    });
  };

  doTeamFetch = (team: string) => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team}?key=${API_KEY}`
    )
      .then(this.parseJSON)
      .then((players) => {
        const escapedPlayers = this.escapeDoubleQuotes(players);
        this.setState({ team: escapedPlayers });
      });
  };

  onDropDownChange = (team: string) => {
    this.doTeamFetch(team);
  };

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { team, searchfield } = this.state;
    const filteredPlayers = team.filter((player) =>
      player.Name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return !team.length ? (
      <div className="tc">
        <h1 className="f1">NFL Rosters</h1>
        <div className="center">
          <DropdownTeamSelection onDropDownChange={this.onDropDownChange} />
        </div>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">NFL Rosters</h1>
        <div className="inputs">
          <DropdownTeamSelection onDropDownChange={this.onDropDownChange} />
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList team={filteredPlayers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
