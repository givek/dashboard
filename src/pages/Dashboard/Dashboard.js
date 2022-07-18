import "./styles.css";

import { SearchBar } from "../../components/SearchBar";
import { Sidebar } from "../../components/Sidebar";
import { SearchContainer } from "../../components/SearchContainer";
import React from "react";
import { Main } from "../../components/Main";

export function Dashboard() {
  const [search, setSearch] = React.useState("");

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="flex-container">
        <SearchBar search={search} setSearch={setSearch} />
        {search ? <SearchContainer search={search} /> : <Main />}
      </div>
    </div>
  );
}
