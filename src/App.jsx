import CarList from "./components/CarList";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ display: "flex", flexGrow: 1, marginTop:'20px' }}>
        <Sidebar />
        <CarList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
