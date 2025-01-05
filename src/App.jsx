import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-[#FFFAF9]">
      <Navbar />
      <Landing />
      <Home /> 
    </div>
  );
};

export default App;
