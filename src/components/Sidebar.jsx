/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextField, Box } from "@mui/material";

const Sidebar = ({ onFilterChange }) => {
  const brands = ["RENAULT MEGANE", "FORD TOURNEO COURIER", "RENAULT CLIO"];
  const transmissions = ["Otomatik", "Manuel"];
  const fuelTypes = ["Benzin", "Dizel"];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);

  const handleCheckboxChange = (category, value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Seçiliyse kaldır
        : [...prev, value] // Seçili değilse ekle
    );
  };

  useEffect(() => {
    onFilterChange({
      brands: selectedBrands,
      transmissions: selectedTransmissions,
      fuelTypes: selectedFuelTypes,
    });
  }, [selectedBrands, selectedTransmissions, selectedFuelTypes, onFilterChange]);

  return (
    <div className="Sidebar">
      {/* Marka Seçenekleri */}
      <FormGroup>
        <p>Marka</p>
        {brands.map((brand) => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onChange={() =>
                  handleCheckboxChange("brands", brand, setSelectedBrands)
                }
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>

      {/* Vites Tipi */}
      <FormGroup>
        <p>Vites Tipi</p>
        {transmissions.map((transmission) => (
          <FormControlLabel
            key={transmission}
            control={
              <Checkbox
                checked={selectedTransmissions.includes(transmission)}
                onChange={() =>
                  handleCheckboxChange("transmissions", transmission, setSelectedTransmissions)
                }
              />
            }
            label={transmission}
          />
        ))}
      </FormGroup>

      {/* Yakıt Tipi */}
      <FormGroup>
        <p>Yakıt Tipi</p>
        {fuelTypes.map((fuel) => (
          <FormControlLabel
            key={fuel}
            control={
              <Checkbox
                checked={selectedFuelTypes.includes(fuel)}
                onChange={() =>
                  handleCheckboxChange("fuelTypes", fuel, setSelectedFuelTypes)
                }
              />
            }
            label={fuel}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Sidebar;
