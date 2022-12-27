import Snowfall from "react-snowfall";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <div className="App container mx-auto">
        <Snowfall
          snowflakeCount={70}
          radius={[0.5, 3]}
          speed={[0.5, 3.5]}
          wind={[-0.5, 2]}
        />
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
