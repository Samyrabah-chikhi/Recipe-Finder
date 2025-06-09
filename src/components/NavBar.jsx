import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ loadByNameRecipe = null, showSearch = true }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    loadByNameRecipe(input);
  };

  return (
    <div className="fixed h-20 top-0 left-0 z-50 min-w-full bg-orange-300 shadow-2xl flex justify-between items-center md:px-3 sd:px-1 py-4 sm:text-md md:text-lg text-orange-900">
      <Link to={`/`}>
        <h3 className="hover:scale-110 transition-transform duration-300">
          Recipe Finder 🥗
        </h3>
      </Link>
      <form className="flex w-1/3 justify-between px-2">
        {showSearch && (
          <>
            <input
              className="w-[90%] border-2 rounded-md px-4 py-2 outline-none hover:scale-[1.02] transition-transform duration-300 focus:ring-1 focus:ring-amber-950 border-amber-900"
              type="text"
              placeholder="Search for recipe"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button
              className="w-[10%] text-3xl hover:scale-110 transition duration-400"
              onClick={handleSearch}
            >
              🔍
            </button>
          </>
        )}
      </form>
      <Link to={`/favorites`}>
        <h3 className="hover:scale-110 transition-transform duration-300">
          Favorites ❤️
        </h3>
      </Link>
    </div>
  );
}

export default NavBar;
