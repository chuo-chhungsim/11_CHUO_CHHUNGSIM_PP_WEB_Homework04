import SidebarComponent from "./components/Sidebar";
import TopNavbarComponent from "./components/TopNavbar";
import DashboardComponent from "./components/Dashboard";
import Assignments from "./components/Assignments";
import LearningMaterialsComponent from "./components/LearningMaterials";
import { useState } from "react";

const App = () => {
  const [search,setSearch] = useState("");
  return (
    <div className="grid grid-cols-[17%_81%] gap-5 h-screen overflow-hidden no-scrollbar bg-gray-100">
      <div>
        <SidebarComponent />
      </div>
      <div className="overflow-hidden">
        <div className=" mx-auto py-3">
          <TopNavbarComponent onSearch={setSearch}/>
        </div>
        <div className="px-3 grid grid-cols-[75%_25%] gap-5">
          <div className="">
            <DashboardComponent  />
            <Assignments searchQuery={search}/>
          </div>
          <div className="">
            <LearningMaterialsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
