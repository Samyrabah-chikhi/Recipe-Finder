import { useParams } from "react-router-dom";

function FoodDetail() {
  const { id } = useParams();
  return <div className="text-5xl">{id}</div>;
}

export default FoodDetail;
