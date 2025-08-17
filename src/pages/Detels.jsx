
import { useParams } from "react-router-dom";

export const Detels = () => {
  const { id } = useParams(); 

  return (
    <div className="mt-[80px] h-[80vh]">
      <h2>Selected Car ID: {id}</h2>
      <h2>Selected Car name: {name}</h2>
    </div>
  );
};
