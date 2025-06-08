import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { getRandomRecipes, getSpecificRecipes } from "../services/api";
import FoodCard from "../components/FoodCard";

const scrollLoad = 20;

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - scrollLoad
    ) {
      if (loading) return;
      setLoading(true);
      loadRandomRecipes();
      setLoading(false);
      /*if(search.trim() == ""){
        loadRandomRecipes();
      }
      else{
        loadByNameRecipe(search)
      }*/
    }
  };

  const loadRandomRecipes = async (number = 6) => {
    try {
      const randomRecipes = await getRandomRecipes(number);
      setRecipes((r) => [...r, ...randomRecipes]);
    } catch (e) {
      console.log(e);
      setError("Failed to load recipes");
    } finally {
      setLoading(false);
      console.log("Random loading done");
    }
  };

  const loadByNameRecipe = async (name, number = 6) => {
    try {
      const specificRecipes = await getSpecificRecipes(name, number);
      setRecipes((r) => [...r, ...specificRecipes]);
    } catch (e) {
      console.log(e);
      setError("Failed to load recipes");
    } finally {
      setLoading(false);
      console.log("Loaded recipes of name: " + name);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    loadRandomRecipes();
    return () => window.removeEventListener("scroll", handleScroll);
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
                id={recipe.id}
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

export default Home;
