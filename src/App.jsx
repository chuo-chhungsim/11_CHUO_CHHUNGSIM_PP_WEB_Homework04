import { useState } from "react";
import SidebarComponent from "./components/Sidebar";
import TopNavbarComponent from "./components/TopNavbar";
import DashboardComponent from "./components/Dashboard";
import Assignments from "./components/Assignments";
import LearningMaterialsComponent from "./components/LearningMaterials";

const App = () => {
  return (
    <div className="grid grid-cols-[18%_80%] gap-2 h-screen overflow-hidden no-scrollbar bg-gray-100">
      
      <div>
        <SidebarComponent />
      </div>
      <div className="overflow-hidden">
        <div className=" mx-auto py-3">
          <TopNavbarComponent />
        </div>
        <div className="px-3 grid grid-cols-[75%_25%] gap-2">
          <div className="">
            <DashboardComponent />
            <Assignments />
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
