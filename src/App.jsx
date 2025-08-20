import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Second from "./pages/Second";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match/:id" element={<Second />} />
      </Routes>
  );
}

export default App;
