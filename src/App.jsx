import CarList from "./components/CarList";
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

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ display: "flex", flexGrow: 1, marginTop: "20px" }}>
        <Sidebar />
        <div>
          <CarList
            Title={"Renault Megane"}
            image={img1}
            Price={"849.200"}
            Engine={"1.3 TCe Joy EDC"}
            ModalYear={"2002"}
            Km={"204.600"}
            Transmisson={"Otomatik"}
          />
          <CarList
            Title={"Hyundai Getz"}
            image={img3}
            Price={"430.100"}
            Engine={"1.4 DOHC"}
            ModalYear={"2002"}
            Km={"350.300"}
            Transmisson={"Manuel"}
          />
          <CarList
            Title={"TOYOTA C-HR"}
            image={img4}
            Price={"1.170.400"}
            Engine={"1.8 Hybrid 4x2 Flame e-CVT"}
            ModalYear={"2021"}
            Km={"13.117"}
            Transmisson={"Otomatik"}
          />
          <CarList
            Title={"Renault Megane"}
            image={img1}
            Price={"849.200"}
            Engine={"1.3 TCe Joy EDC"}
            ModalYear={"2002"}
            Km={"204.600"}
            Transmisson={"Otomatik"}
          />
          <CarList
            Title={"Hyundai Getz"}
            image={img2}
            Price={"430.100"}
            Engine={"1.4 DOHC"}
            ModalYear={"2002"}
            Km={"350.300"}
            Transmisson={"Manuel"}
          />
          <CarList
            Title={"TOYOTA C-HR"}
            image={img4}
            Price={"1.170.400"}
            Engine={"1.8 Hybrid 4x2 Flame e-CVT"}
            ModalYear={"2021"}
            Km={"13.117"}
            Transmisson={"Otomatik"}
          />
          <CarList
            Title={"Renault Megane"}
            image={img1}
            Price={"849.200"}
            Engine={"1.3 TCe Joy EDC"}
            ModalYear={"2002"}
            Km={"204.600"}
            Transmisson={"Otomatik"}
          />
          <CarList
            Title={"Hyundai Getz"}
            image={img2}
            Price={"430.100"}
            Engine={"1.4 DOHC"}
            ModalYear={"2002"}
            Km={"350.300"}
            Transmisson={"Manuel"}
          />
          <CarList
            Title={"TOYOTA C-HR"}
            image={img4}
            Price={"1.170.400"}
            Engine={"1.8 Hybrid 4x2 Flame e-CVT"}
            ModalYear={"2021"}
            Km={"13.117"}
            Transmisson={"Otomatik"}
          />
          <CarList
            Title={"Renault Megane"}
            image={img1}
            Price={"849.200"}
            Engine={"1.3 TCe Joy EDC"}
            ModalYear={"2002"}
            Km={"204.600"}
            Transmisson={"Otomatik"}
          />
          <CarList
            Title={"Hyundai Getz"}
            image={img2}
            Price={"430.100"}
            Engine={"1.4 DOHC"}
            ModalYear={"2002"}
            Km={"350.300"}
            Transmisson={"Manuel"}
          />
          <CarList
            Title={"TOYOTA C-HR"}
            image={img4}
            Price={"1.170.400"}
            Engine={"1.8 Hybrid 4x2 Flame e-CVT"}
            ModalYear={"2021"}
            Km={"13.117"}
            Transmisson={"Otomatik"}
          />
        </div>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer />
    </div>
  );
}

export default App;
