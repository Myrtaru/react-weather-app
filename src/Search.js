import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <input
        className="search-form"
        type="search"
        placeholder="Enter a city"
        autoFocus="on"
        autoComplete="off"
      />
      <button className="Button">Search</button>
    </div>
  );
}
