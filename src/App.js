import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";

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
        <ScrollTop />
      </div>
    </>
  );
}

export default App;
