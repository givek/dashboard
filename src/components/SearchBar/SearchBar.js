import "./styles.css";

import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as TimesIcon } from "../../icons/times.svg";

import React from "react";

export function SearchBar(props) {
  const [searchFocused, setSearchFocused] = React.useState(false);

  return (
    <div className="search-container">
      <div className="search-icon-container">
        {searchFocused || props.search ? (
          <TimesIcon onClick={() => props.setSearch("")} />
        ) : (
          <SearchIcon />
        )}
      </div>
      <input
        className="search-bar"
        value={props.search}
        type="search"
        placeholder="Search by account name or website"
        onChange={(e) => props.setSearch(e.target.value)}
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
      />
    </div>
  );
}
