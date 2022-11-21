import CategoryList from "./components/CategoryList";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App container mx-auto px-5">
        <Landing />
        <Navbar />
        <CategoryList />
        <div className="m-5 text-center">Developed by Talha Çelebioğlu</div>
      </div>
    </>
  );
}

export default App;
