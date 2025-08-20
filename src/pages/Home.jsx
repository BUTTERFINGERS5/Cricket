// // src/pages/Home.jsx
// import React from "react";
// import MainContent from "../Components/mainContent/MainContent";

// export default function Home({ selectedCategory }) {
//   // MainContent handles the inner two-column grid & match cards
//   return <MainContent selectedCategory={selectedCategory} />;
// }
// import IplMatches from "../Components/IplMatches/IplMatches";

// function Home() {
//   return (
//     <div className="grid grid-cols-2 h-screen">
//       {/* Left Section */}
//       <div className="bg-black bg-opacity-50 p-4">
//         {/* your left section content */}
//       </div>

//       {/* Right Section */}
//       <div className="bg-black bg-opacity-70 p-4 overflow-y-auto">
//         <IplMatches />
//       </div>
//     </div>
//   );
// }

// export default Home;
import IplMatches from "../Components/IplMatches/IplMatches";

function Home() {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-black bg-opacity-50 p-4">
        {/* your left section content */}
      </div>

      {/* Right Section */}
      <div className="bg-black bg-opacity-70 p-4 overflow-y-auto">
        <IplMatches />
      </div>
    </div>
  );
}

export default Home;
