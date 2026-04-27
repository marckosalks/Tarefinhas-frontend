import { FiTrash } from "react-icons/fi";
import { FaFlagCheckered } from "react-icons/fa";
import { IoPlayBackCircleOutline } from "react-icons/io5";
import { useState } from "react";

type CardType = {
  id: number;
  title: string;
  description: string;
  handleDelete: (id: number) => void;
};

export function Card({
  title,
  description,
  handleDelete,

  id,
}: CardType) {
  const [risk, setRisk] = useState("");

  function handleRisk() {
    if (risk === "line-through") {
      setRisk("");

      return;
    }

    setRisk("line-through");
    // chamar meu serviço
  }

  return (
    <div className="bg-white shadow-2xl rounded-2xl w-60 h-44 flex flex-col items-center relative">
      <div className="absolute bottom-2 right-2 left-2 flex justify-between">
        <button
          onClick={handleRisk}
          className="text-amber-700 hover:text-amber-950"
        >
          {risk !== "line-through" ? (
            <FaFlagCheckered />
          ) : (
            <IoPlayBackCircleOutline />
          )}
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="text-red-500 hover:text-red-700"
        >
          <FiTrash />
        </button>
      </div>
      <h2 className="pt-16 text-center" style={{ padding: 25 }}>
        {title}
      </h2>
      <p className={`mt-2 text-sm text-gray-500 ${risk}`}>{description}</p>
    </div>
  );
}
