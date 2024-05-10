import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import logo from "../../assets/logo.svg";
import main from "../../assets/main.svg";
import user from "../../assets/user.svg";
import tracking from "../../assets/tracking.svg";
import redirect from "../../assets/redirect.svg";
import description from "../../assets/description.svg";
import profile from "../../assets/Profile.svg";

import "./Header.css";

function Header() {
  const [name, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="bg">
        <div className="container header">
          <div>
            <div className="logo">
                <img src={logo} alt="" />
                <a href="#" className="projectName"><span>Loyiha nomi</span></a>
            </div>
          </div>

          <ul className="nav">
            <li>
              <a href="#" className="tab">
                <img src={main} alt="" />
                Asosiy
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={user} alt="" />
                Mijozlar bazasi
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={tracking} alt="" />
                Tracking loyihalari
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={description} alt="" />
                Sharh olish loyihalari
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={redirect} alt="" />
                Redirect loyihalari
              </a>
            </li>
          </ul>

          <div className="select">
            <img src={profile} alt="" />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">
                Austin Robertson
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={name}
                label="name"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
