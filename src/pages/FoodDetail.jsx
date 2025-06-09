import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { getRecipeById } from "../services/api";

function FoodDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const recipe = await getRecipeById(id);
      console.log(recipe);
      setData(recipe);
    } catch (err) {
      setError(err);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="relative bg-amber-100 min-w-full min-h-screen font-sans flex justify-center">
      <NavBar showSearch={false}></NavBar>
      {!loading && (
        <div className="bg-red-200 px-2 min-h-4/5 w-5/6 flex flex-col justify-center items-center mt-22 rounded-md">
          <h2 className="mt-4 text-2xl font-bold text-amber-900 mb-4">
            {data.title}
          </h2>
          <img
            src={data.image}
            alt={data.title}
            className="w-8/12 rounded-md"
          />
          <div className="m-4 w-8/12 bg-red-300 flex justify-between p-6 rounded-md font-semibold">
            {data.preparationMinutes && (
              <p>Preparation: {data.preparationMinutes} min</p>
            )}
            {data.cookingMinutes && <p>Cooking: {data.cookingMinutes} min</p>}
            {data.readyInMinutes && <p>Total: {data.readyInMinutes} min</p>}
          </div>

          <h2 className="mt-4 font-semibold text-xl underline">Summary:</h2>
          <div
            className="my-4 text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default FoodDetail;
