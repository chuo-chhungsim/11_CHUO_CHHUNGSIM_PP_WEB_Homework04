import { Star } from "lucide-react";
import FilterComponent from "./Filter";
import { learningMaterials as initialData } from "../data/learningMaterials";
import { useState } from "react";

export default function LearningMaterialsComponent() {
  const [originalMaterials] = useState(initialData);
  const [materials, setMaterials] = useState(initialData);

  const toggleFavorite = (id) => {
    setMaterials((prevMaterials) =>
      prevMaterials.map((material) =>
        material.id === id
          ? { ...material, isFavorite: !material.isFavorite }
          : material
      )
    );
  };

  const handleSort = (sortedMaterials) => {
    setMaterials(sortedMaterials);
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80%] no-scrollbar">
      <FilterComponent
        materials={materials}
        originalMaterials={originalMaterials}
        onSort={handleSort}
      />

      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      <div className="space-y-3 px-3">
        {materials.map((material) => (
          <div
            key={material.id}
            className="bg-light-gray rounded-2xl px-3 py-2 flex gap-5 items-center"
          >
            <img
              src={material.image}
              width={50}
              height={50}
              className="rounded-xl"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{material.title}</p>
                <Star
                  size={20}
                  strokeWidth={material.isFavorite ? 0 : 1}
                  fill={material.isFavorite ? "#FFD700" : "#fff"}
                  onClick={() => toggleFavorite(material.id)}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-gray-400 text-sm">{material.postedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
