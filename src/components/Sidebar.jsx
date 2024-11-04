/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextField, Box } from "@mui/material";

const Sidebar = ({ onFilterChange, searchTerm, onSearchChange }) => {
  const brands = ["RENAULT", "FORD", "AUDI", "TOYOTA"];
  const transmissions = ["Otomatik", "Manuel"];
  const fuelTypes = ["Benzin", "Dizel"];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);

  const handleCheckboxChange = (category, value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
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
      {/* Arama Inputu */}
      <Box mb={2}>
        <TextField
          label="Ara"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Box>

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
