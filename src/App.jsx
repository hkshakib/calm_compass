function App() {
  return (
    <div className="flex flex-col h-[100vh] p-10">
      <div className="flex justify-center items-center text-[24px] font-heading uppercase">
        <span className="border-sky-100">What are you felling?</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 text-xl font-heading uppercase">
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#CDB4DB] rounded-lg">
          Anxiety
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#FFC8DD] rounded-lg">
          Depressed
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#BDE0FE] rounded-lg">
          Grief
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#A2D2FF] rounded-lg">
          Stress
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#CDB4DB] rounded-lg">
          Fear
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#FFC8DD] rounded-lg">
          Loneliness
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#BDE0FE] rounded-lg">
          Anger
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#A2D2FF] rounded-lg">
          Overthinking
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#CDB4DB] rounded-lg">
          Hopelessness
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#FFC8DD] rounded-lg">
          Self-Doubt
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#BDE0FE] rounded-lg">
          Guilt
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#A2D2FF] rounded-lg">
          Jealousy
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#CDB4DB] rounded-lg">
          Restlessness
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#FFC8DD] rounded-lg">
          Disappointment
        </button>
        <button className="h-24 border hover:border-blue-500 transition-colors bg-[#BDE0FE] rounded-lg">
          Social Anxiety
        </button>
      </div>
    </div>
  );
}

export default App;
