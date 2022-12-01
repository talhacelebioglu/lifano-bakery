import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App container mx-auto">
        <div className="px-5">
          <Landing />
          <Navbar />
          <CategoryList />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
