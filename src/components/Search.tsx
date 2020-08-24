import React, { FC, useState } from "react";

interface SearchProps {
  type: string;
  onSearch: (value: string) => void;
}

const Search: FC<SearchProps> = ({ type, onSearch }) => {
  const [value, setValue] = useState("");

  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="search-component" onSubmit={onsubmit}>
      <div className="ui label">Search {type} by id</div>
      <div className="ui icon input">
        <i className="search icon"></i>
        <input
          type="text"
          placeholder={`${type} id`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
