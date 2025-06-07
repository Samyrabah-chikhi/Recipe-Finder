import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { getRandomRecipes } from "./services/api";
import FoodCard from "./components/FoodCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRandomRecipes = async () => {
      try {
        const randomRecipes = await getRandomRecipes(12);
        setRecipes(randomRecipes);
      } catch (e) {
        console.log(e);
        setError("Failed to load recipes");
      } finally {
        setLoading(false); 
        console.log("Hello")
      }
    };
    loadRandomRecipes();
    console.log(recipes);
  }, []);

  return (
    <div className=" bg-amber-100 min-w-full min-h-screen font-sans">
      <NavBar></NavBar>
      <div className="flex flex-wrap gap-4 justify-center p-1 pt-24">
        {recipes.map((recipe, _) => {
          return (
            <FoodCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            ></FoodCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
