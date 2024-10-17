// eslint-disable-next-line no-unused-vars
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <FormGroup className="brand">
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
      <FormGroup>
        <p>Vites Tipi</p>
        <FormControlLabel control={<Checkbox />} label="Tümü" />
        <FormControlLabel control={<Checkbox />} label="Manuel" />
        <FormControlLabel control={<Checkbox />} label="Otomatik" />
      </FormGroup>
      <FormGroup>
        <p>Yakıt Tipi</p>
        <FormControlLabel control={<Checkbox />} label="Tümü" />
        <FormControlLabel control={<Checkbox />} label="Manuel" />
        <FormControlLabel control={<Checkbox />} label="Otomatik" />
      </FormGroup>
      <br />
      <p>Fiyat</p>
      <div className="textField">
        <TextField id="outlined-basic" label="Min" variant="outlined" />
        <TextField id="outlined-basic" label="Max" variant="outlined" />
      </div>
      <p>Model Yılı</p>
      <div className="textField">
        <TextField id="outlined-basic" label="1998" variant="outlined" />
        <TextField id="outlined-basic" label="2024" variant="outlined" />
      </div>
      <p>Km</p>
      <div className="textField">
        <TextField id="outlined-basic" label="0" variant="outlined" />
        <TextField id="outlined-basic" label="400.000" variant="outlined" />
      </div>
      <br />
      <FormGroup className="brand">
        <p>Renk</p>
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
