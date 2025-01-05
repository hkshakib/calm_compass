import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="p-5 border">
      <Navbar />
      <Landing />
    </div>
  );
};

export default App;
