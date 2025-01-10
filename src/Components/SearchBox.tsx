import React from "react";

interface SearchBoxProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchChange }) => {
  return (
    <div className="pa2 mv0 mrauto">
      <input
        className="pa3 ba b--red"
        type="search"
        placeholder="search player's name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
