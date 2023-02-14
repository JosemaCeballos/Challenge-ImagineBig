import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/context";
import "./Searchbar.css";

export const Searchbar = () => {
  const [first, setfirst] = useState("");
  const context = useContext(ThemeContext);

  const handleInput = (e) => {
    setfirst(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault()
    context.dispatch({ type: "SEARCH_PRODUCT", payload: first });
  };

  return (
    <form onSubmit={handleChange}>
      <input type="text" onChange={handleInput} placeholder="Buscar productos" />
      <button>Buscar</button>
    </form>
  );
};
