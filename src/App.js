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
        <div className="p-5 text-center">
          ~ Developed by
          <a
            href="http://www.instagram.com/talhacelebioglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1 underline"
          >
            Talha Çelebioğlu
          </a>
          ~
        </div>
      </div>
    </>
  );
}

export default App;
