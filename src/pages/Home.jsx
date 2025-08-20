import IplMatches from "../Components/IplMatches/IplMatches";

function Home() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-black bg-opacity-50 p-4">
        {/* Left section (filters, info) */}
      </div>

      <div className="bg-black bg-opacity-70 p-4 overflow-y-auto">
        <IplMatches />
      </div>
    </div>
  );
}

export default Home;
