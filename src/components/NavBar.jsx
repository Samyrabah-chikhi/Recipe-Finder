import React from "react";

function NavBar() {
  return (
    <div className= "fixed top-0 left-0 z-50 min-w-full bg-orange-300 shadow-2xl flex justify-between items-center px-6 py-4 sm:text-md md:text-lg text-orange-900">
      <h3 className="hover:scale-110 transition-transform duration-300">Recipe Finder 🥗</h3>
      <input
        className="w-1/3 border-2 rounded-md px-4 py-2 outline-none hover:scale-105 transition-transform duration-300 focus:ring-1 focus:ring-amber-950 border-amber-900"
        type="text"
        placeholder="Search for recipe"
      ></input>
      <h3 className="hover:scale-110 transition-transform duration-300">Favorites ❤️</h3>
    </div>
  );
}

export default NavBar;
