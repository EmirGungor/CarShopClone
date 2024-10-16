// eslint-disable-next-line no-unused-vars
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <FormGroup>
        <p>Marka</p>
        <FormControlLabel control={<Checkbox />} label="Tümü (69)" />
        <FormControlLabel control={<Checkbox />} label="AUDI (2)" />
        <FormControlLabel control={<Checkbox />} label="BMW (5)" />
        <FormControlLabel control={<Checkbox />} label="CITROEN (3)" />
        <FormControlLabel control={<Checkbox />} label="DACIA (12)" />
        <FormControlLabel control={<Checkbox />} label="DS AUTOMOBILES(1)" />
        <FormControlLabel control={<Checkbox />} label="FIAT (6)" />
        <FormControlLabel control={<Checkbox />} label="FORD (3)" />
      </FormGroup>
    </div>
  );
};

export default Sidebar;
