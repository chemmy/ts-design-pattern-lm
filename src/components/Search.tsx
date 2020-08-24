import React, { FC, useState } from "react";

interface SearchProps {
  type: string;
}

const Search: FC<SearchProps> = ({ type }) => {
  const [value, setValue] = useState("");

  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit", value);
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
