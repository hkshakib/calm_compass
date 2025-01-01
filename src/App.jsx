import { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { mentalStates } from "./data/mentalStates";

const App = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState("");

  const handleStateClick = (state) => {
    setSelectedState(state);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen pl-10 pr-10 pt-10 bg-[#f2f4f8]">
      <Navbar />

      <main className="flex-grow pl-10 pr-10 md:p-10">
        <div className="flex justify-center items-center text-2xl font-heading uppercase mb-10">
          <span className="p-4 rounded-lg shadow-sm">
            What are you feeling?
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xl font-heading uppercase">
          {mentalStates.map((state, index) => (
            <button
              key={index}
              className={`h-24 border hover:border-blue-500 transition-colors rounded-lg shadow-sm hover:shadow-md`}
              style={{ backgroundColor: state.color }}
              onClick={() => {
                handleStateClick(state);
                setColor(state.color);
              }}
            >
              {state.name}
            </button>
          ))}
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedState?.name || ""}
        color={color}
      >
        {selectedState && (
          <div className="space-y-4">
            <p className="text-gray-600">
              {selectedState.name} ({selectedState.content.arabic})
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Quranic Cure:</p>
              <p className="text-gray-700">
                {selectedState.content.quranicCure}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Recommended Practices:</p>
              <ul className="list-disc pl-5 text-gray-700">
                {selectedState.content.practices.map((practice, index) => (
                  <li key={index}>{practice}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
