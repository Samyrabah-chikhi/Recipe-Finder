import React from "react";

function FoodCard({ title, image }) {
  return (
    <div className="pointer-events-auto bg-red-300 p-2 lg:w-1/4 md:w-1/3 sd:w-1/6 rounded-lg hover:scale-[1.02] hover:bg-red-400 transition duration-500">
      <div className="flex justify-between">
        <h3 className="text-amber-800">{title}</h3> 
        <button className="hover:scale-110 duration-300">❤️</button>
      </div>
      <img src={image} alt={title} className="" />
    </div>
  );
}

export default FoodCard;
