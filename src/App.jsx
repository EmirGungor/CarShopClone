/* eslint-disable no-unused-vars */
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import img1 from "./assets/car1.jpg";
import img2 from "./assets/car2.jpg";
import img3 from "./assets/car3.jpg";
import img4 from "./assets/car4.jpg";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import CarCard from "./components/CarCard";
import { Box } from "@mui/material";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          marginTop: "20px",
        }}
      >
        <Sidebar />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <CarCard
            image={img1}
            title={"RENAULT MEGANE"}
            engine={"1.3 TCe Joy EDC"}
            km={"38.991"}
            model={"2022"}
            transmission={"Otomatik"}
            fuel={"Benzin"}
            price={"849.400"}
          />
          <CarCard
            image={img3}
            title={"Hyundai Getz"}
            engine={"1.4 DOHC"}
            km={"350.300"}
            model={"2009"}
            transmission={"Manuel"}
            fuel={"Gas"}
            price={"430.100"}
          />
          <CarCard
            image={img4}
            title={"TOYOTA C-HR"}
            engine={"1.8 Hybrid 4x2 Flame e-CVT"}
            km={"13.117"}
            model={"2021"}
            transmission={"Otomatik"}
            fuel={"Hybrid"}
            price={"1.170.400"}
          />
          <CarCard
            image={img1}
            title={"RENAULT MEGANE"}
            engine={"1.3 TCe Joy EDC"}
            km={"38.991"}
            model={"2022"}
            transmission={"Otomatik"}
            fuel={"Benzin"}
            price={"849.400"}
          />
          <CarCard
            image={img3}
            title={"Hyundai Getz"}
            engine={"1.4 DOHC"}
            km={"350.300"}
            model={"2002"}
            transmission={"Manuel"}
            fuel={"Gas"}
            price={"430.100"}
          />
          <CarCard
            image={img4}
            title={"TOYOTA C-HR"}
            engine={"1.8 Hybrid 4x2 Flame e-CVT"}
            km={"13.117"}
            model={"2021"}
            transmission={"Otomatik"}
            fuel={"Hybrid"}
            price={"1.170.400"}
          />
        </Box>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
