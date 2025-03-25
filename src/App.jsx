import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import InCompletedTasks from "./pages/InCompletedTasks";
const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/importantTasks" element={<ImportantTasks />} />
            <Route path="/completedTasks" element={<CompletedTasks />} />
            <Route path="/incompletedTasks" element={<InCompletedTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
