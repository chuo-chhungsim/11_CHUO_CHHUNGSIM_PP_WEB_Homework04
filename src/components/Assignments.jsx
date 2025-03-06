import { useState } from "react";
import AddNewProjectComponent from "./AddNewProject";
import CardComponent from "./Card";

export default function Assignments({ searchQuery }) {
  const [cards, setCards] = useState([]);

  const addCard = (formData) => {
    const newCard = {
      name: formData.projectName,
      dueDate: formData.dueDate,
      progress: formData.projectProgress,
      description: formData.projectDescription,
    };
    setCards((prevData) => [...prevData, newCard]);
  };

  // Filter cards based on searchQuery
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between py-5">
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent onAddCard={addCard} />
      </div>

      {/* Display filtered cards */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 h-[62vh] overflow-y-auto no-scrollbar">
        {filteredCards.map((data, index) => (
          <CardComponent key={index} cardProps={data} />
        ))}
      </div>
    </div>
  );
}
