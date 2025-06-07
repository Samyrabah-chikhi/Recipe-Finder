import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { getRandomRecipes, getSpecificRecipes } from "./services/api";
import FoodCard from "./components/FoodCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const loadByNameRecipe = async (name, number = 3) => {
    try {
      const specificRecipes = await getSpecificRecipes(name, number);
      setRecipes(specificRecipes);
    } catch (e) {
      console.log(e);
      setError("Failed to load recipes");
    } finally {
      setLoading(false);
      console.log("Hello");
    }
  };

  useEffect(() => {
    const loadRandomRecipes = async (number = 3) => {
      try {
        const randomRecipes = await getRandomRecipes(number);
        setRecipes(randomRecipes);
      } catch (e) {
        console.log(e);
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
        console.log("Hello");
      }
    };
    //setLoading(false);
    loadRandomRecipes();
    console.log(recipes);
  }, []);

  return (
    <div className="relative bg-amber-100 min-w-full min-h-screen font-sans">
      <NavBar loadByNameRecipe={loadByNameRecipe}></NavBar>

      {!loading ? (
        <div className="flex flex-wrap gap-4 justify-center p-1 pt-24 z-10 pointer-events-none">
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
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
