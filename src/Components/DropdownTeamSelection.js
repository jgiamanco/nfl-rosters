import React from "react";
import { Dropdown } from "semantic-ui-react";

const teamOptions = [
  {
    key: "Arizona Cardinals",
    text: "Arizona Cardinals",
    value: "ari",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/ARI.svg"
    }
  },
  {
    key: "Atlanta Falcons",
    text: "Atlanta Falcons",
    value: "atl",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/ATL.svg"
    }
  },
  {
    key: "Baltimore Ravens",
    text: "Baltimore Ravens",
    value: "bal",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/BAL.svg"
    }
  },
  {
    key: "Buffalo Bills",
    text: "Buffalo Bills",
    value: "buf",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/BUF.svg"
    }
  },
  {
    key: "Carolina Panthers",
    text: "Carolina Panthers",
    value: "car",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/CAR.svg"
    }
  },
  {
    key: "Chicago Bears",
    text: "Chicago Bears",
    value: "chi",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/CHI.svg"
    }
  },
  {
    key: "Cincinnati Bengals",
    text: "Cincinnati Bengals",
    value: "cin",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/CIN.svg"
    }
  },
  {
    key: "Cleveland Browns",
    text: "Cleveland Browns",
    value: "cle",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/CLE.svg"
    }
  },
  {
    key: "Dallas Cowboys",
    text: "Dallas Cowboys",
    value: "dal",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/DAL.svg"
    }
  },
  {
    key: "Denver Broncos",
    text: "Denver Broncos",
    value: "den",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/DEN.svg"
    }
  },
  {
    key: "Detroit Lions",
    text: "Detroit Lions",
    value: "det",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/DET.svg"
    }
  },
  {
    key: "Green Bay Packers",
    text: "Green Bay Packers",
    value: "gb",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/GB.svg"
    }
  },
  {
    key: "Houston Texans",
    text: "Houston Texans",
    value: "hou",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/HOU.svg"
    }
  },
  {
    key: "Indianapolis Colts",
    text: "Indianapolis Colts",
    value: "ind",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/IND.svg"
    }
  },
  {
    key: "Jacksonville Jaguars",
    text: "Jacksonville Jaguars",
    value: "jax",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/JAX.svg"
    }
  },
  {
    key: "Kansas City Chiefs",
    text: "Kansas City Chiefs",
    value: "kc",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/KC.svg"
    }
  },
  {
    key: "Las Vegas Raiders",
    text: "Las Vegas Raiders",
    value: "LV",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/LV.svg"
    }
  },
  {
    key: "Los Angeles Chargers",
    text: "Los Angeles Chargers",
    value: "lac",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/LAC.svg"
    }
  },
  {
    key: "Los Angeles Rams",
    text: "Los Angeles Rams",
    value: "lar",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/LA.svg"
    }
  },
  {
    key: "Miami Dolphins",
    text: "Miami Dolphins",
    value: "mia",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/MIA.svg"
    }
  },
  {
    key: "Minnesota Vikings",
    text: "Minnesota Vikings",
    value: "min",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/MIN.svg"
    }
  },
  {
    key: "New England Patriots",
    text: "New England Patriots",
    value: "ne",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/NE.svg"
    }
  },
  {
    key: "New Orleans Saints",
    text: "New Orleans Saints",
    value: "no",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/NO.svg"
    }
  },
  {
    key: "New York Giants",
    text: "New York Giants",
    value: "nyg",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/NYG.svg"
    }
  },
  {
    key: "New York Jets",
    text: "New York Jets",
    value: "nyj",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/NYJ.svg"
    }
  },
  {
    key: "Philadelphia Eagles",
    text: "Philadelphia Eagles",
    value: "phi",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/PHI.svg"
    }
  },
  {
    key: "Pittsburgh Steelers",
    text: "Pittsburgh Steelers",
    value: "pit",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/PIT.svg"
    }
  },
  {
    key: "San Francisco 49ers",
    text: "San Francisco 49ers",
    value: "sf",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/SF.svg"
    }
  },
  {
    key: "Seattle Seahawks",
    text: "Seattle Seahawks",
    value: "sea",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/SEA.svg"
    }
  },
  {
    key: "Tampa Bay Buccaneers",
    text: "Tampa Bay Buccaneers",
    value: "tb",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/TB.svg"
    }
  },
  {
    key: "Tennessee Titans",
    text: "Tennessee Titans",
    value: "ten",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/TEN.svg"
    }
  },
  {
    key: "Washington Football Team",
    text: "Washington Football Team",
    value: "was",
    image: {
      avatar: true,
      src: "https://static.www.nfl.com/league/api/clubs/logos/WAS.svg"
    }
  }
];

export default class DropdownTeamSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      selected: null
    };
  }

  onChange = (e, data) => {
    const { onDropDownChange } = this.props;
    this.setState({ selected: data.value }, () =>
      onDropDownChange(this.state.selected)
    );
  };

  onSearchChange = (e, data) => {
    console.log(data.searchQuery);
    this.setState({ searchQuery: data.searchQuery });
  };

  render() {
    const { searchQuery, selected } = this.state;
    return (
      <div>
        <Dropdown
          className="w-20"
          button
          fluid
          options={teamOptions}
          placeholder="Select Team"
          search
          text={searchQuery}
          searchQuery={searchQuery}
          value={selected}
          onChange={this.onChange}
          onSearchChange={this.onSearchChange}
        />
      </div>
    );
  }
}
