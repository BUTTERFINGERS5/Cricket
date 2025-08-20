// // src/Approuter.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Second from "./pages/Second";

// export default function Approuter({ selectedCategory, setSelectedCategory }) {
//   return (
//     <Routes>
//       {/* Layout wraps all child routes (Header + background) */}
//       <Route
//         path="/"
//         element={<Layout setSelectedCategory={setSelectedCategory} />}
//       >
//         {/* index -> "/" */}
//         <Route index element={<Home selectedCategory={selectedCategory} />} />

//         {/* "/second" will render inside Layout's <Outlet/> */}
//         <Route path="second" element={<Second selectedCategory={selectedCategory} />} />
//       </Route>
//     </Routes>
//   );
// }
// src/Approuter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Second from "./pages/Second";
import MatchDetail from "./pages/MatchDetail"; // <-- new

export default function Approuter({ selectedCategory, setSelectedCategory }) {
  return (
    <Routes>
      <Route path="/" element={<Layout setSelectedCategory={setSelectedCategory} />}>
        <Route index element={<Home selectedCategory={selectedCategory} />} />
        <Route path="second" element={<Second selectedCategory={selectedCategory} />} />
        {/* new route for clicked match */}
        <Route path="match/:id" element={<MatchDetail />} />
      </Route>
    </Routes>
  );
}
