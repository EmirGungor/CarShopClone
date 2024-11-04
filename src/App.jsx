/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CarCard from "./components/CarCard";
import Section1 from "./components/Section1";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    brands: [],
    transmissions: [],
    fuelTypes: [],
  });
  const [searchTerm, setSearchTerm] = useState(""); // Arama terimi durumu
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    // Filtreleme işlemi, sadece filtreler ve arama terimi değiştiğinde çalışacak
    const filtered = cars.filter((car) => {
      // Arama terimi kontrolü
      const matchesSearchTerm =
        searchTerm === "" ||
        car.title.toLowerCase().includes(searchTerm.toLowerCase());

      // Marka, vites ve yakıt tipi kontrolü
      const brandMatch =
        filters.brands.length === 0 ||
        filters.brands.some((brand) => car.title.includes(brand));
      const transmissionMatch =
        filters.transmissions.length === 0 ||
        filters.transmissions.includes(car.transmission);
      const fuelTypeMatch =
        filters.fuelTypes.length === 0 || filters.fuelTypes.includes(car.fuel);

      return matchesSearchTerm && brandMatch && transmissionMatch && fuelTypeMatch;
    });
    setFilteredCars(filtered);
  }, [filters, cars, searchTerm]);

  const getCars = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:3000/cars");
    setCars(response.data);
    setFilteredCars(response.data);
    setLoading(false);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Arama terimi güncelleme işlevi
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ display: "flex", flexGrow: 1, marginTop: 2 }}>
        {/* searchTerm ve handleSearchChange prop olarak geçildi */}
        <Sidebar
          onFilterChange={handleFilterChange}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            padding: 2,
          }}
        >
          <Box>
            <Typography variant="h6">
              Toplam Sonuç: {filteredCars.length}
            </Typography>
          </Box>

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <CarCard
                key={car.id}
                image={car.image}
                title={car.title}
                engine={car.engine}
                km={car.km}
                model={car.model}
                transmission={car.transmission}
                fuel={car.fuel}
                price={car.price}
              />
            ))
          ) : (
            <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
              Aradığınız kriterlere uygun araç bulunamadı.
            </Typography>
          )}
        </Box>
      </Box>
      <Section1 />
      <Footer />
    </Box>
  );
}

export default App;
