import React, { useState } from "react";

interface DropdownOption {
  key: string;
  text: string;
  value: string;
  image?: { avatar: boolean; src: string };
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onChange(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedOption = options.find((option) => option.value === selected);

  return (
    <div
      className={`ui fluid search dropdown w-20 ${
        isOpen ? "active visible" : ""
      }`}
    >
      <div className="dropdown-header ui button" onClick={handleToggle}>
        {selectedOption ? selectedOption.text : placeholder}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu visible">
          <input
            type="text"
            className="dropdown-search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {filteredOptions.map((option) => (
            <div
              key={option.key}
              className="dropdown-option item"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.image && (
                <img
                  src={option.image.src}
                  alt={option.text}
                  className="dropdown-avatar ui avatar image"
                />
              )}
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
