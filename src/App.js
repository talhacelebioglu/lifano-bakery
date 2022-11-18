import CategoryList from "./components/CategoryList";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App container mx-auto p-5">
      <Landing />
      <Navbar />
      <CategoryList />
    </div>
  );
}

export default App;
