import React, { Component } from "react";
import CardList from "../Components/CardList.js";
import SearchBox from "../Components/SearchBox.js";
import Scroll from "../Components/Scroll.js";
import DropdownTeamSelection from "../Components/DropdownTeamSelection";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      team: [],
      searchfield: ""
    };
  }

  // componentDidMount() {
  //   this.doTeamFetch("lac");
  // }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  doTeamFetch(team) {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team}?key=680357673cd14ef28c1bd63359aa9c48`
    )
      .then(response => response.json())
      .then(players => this.setState({ team: players }));
  }

  onDropDownChange(team) {
    this.doTeamFetch(team);
  }

  render() {
    const { team, searchfield } = this.state;
    const filteredPlayers = team.filter(player => {
      return player.Name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !team.length ? (
      <div className="tc">
        <h1 className="f1">NFL Rosters</h1>
        <div className="center">
          <DropdownTeamSelection
            onDropDownChange={team => this.onDropDownChange(team)}
          />
        </div>  
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">NFL Rosters</h1>
        <div className="inputs">
          <DropdownTeamSelection
            onDropDownChange={team => this.onDropDownChange(team)}
          />
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
