import { useState } from "react";
import AddNewProjectComponent from "./AddNewProject";
import CardComponent from "./Card";
export default function Assignments() {

  const [cards, setCards] = useState([]);
  const addCard = (formData) => {
    const card = {
      name: formData.projectName,
      dueDate: formData.dueDate,
      progress: formData.projectProgress,
      description: formData.projectDescription,
    }
    setCards((prevData)=>[...prevData, card]);
  }
  return (
    <div>
      <div className="flex justify-between py-5">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent onAddCard={addCard} />
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3">
        {cards.map((data, index) => (
          <CardComponent key={index} cardProps={data} />
        ))}
      </div>
    </div>
  );
}
