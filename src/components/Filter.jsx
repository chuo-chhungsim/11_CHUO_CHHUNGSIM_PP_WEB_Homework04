import { useState } from "react";

export default function FilterComponent({
  materials,
  originalMaterials,
  onSort,
}) {
  const [sortOrder, setSortOrder] = useState("");

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    if (order === "") {
      onSort(originalMaterials);
      return;
    }

    let sortedMaterials = [...materials];
    if (order === "A-Z") {
      sortedMaterials.sort((a, b) => a.title.localeCompare(b.title));
      console.log("A-Z");
    } else if (order === "Z-A") {
      sortedMaterials.sort((a, b) => b.title.localeCompare(a.title));
      console.log("A-Z");
    }
    onSort(sortedMaterials);
  };

  return (
    <div className="mt-4 mx-4 flex justify-between">
      <div className="relative w-full ">
        <select
          id="filterLearningMaterials"
          value={sortOrder}
          name="filterLearningMaterials"
          className="cursor-pointer text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </div>
  );
}
