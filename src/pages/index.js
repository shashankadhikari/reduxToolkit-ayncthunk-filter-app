import React from "react";
import CocktailList from "../components/CocktailList";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <div>
      Home
      <SearchInput />
      <CocktailList />
    </div>
  );
};

export default Home;
