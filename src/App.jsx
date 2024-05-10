import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Checkbox from "@mui/material/Checkbox";
import check from "./assets/Uncheck.svg";
import addSquare from "./assets/add-square.svg"
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import phone from "./assets/phone.svg";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Header from "./components/Header/Header";
import "./App.css";





function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const howMuchTime = ["O'sha zahoti"];

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function App() {
  const [ uz, setUz ] = React.useState();
  const [ ru, setRu ] = React.useState();
  const [ eng, setEng ] = React.useState();
  const [ projectName, setProjectName] = React.useState()
  const [ link, setLink ] = React.useState();


  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const [value, setValue] = React.useState(0);

  const Change = (event, newValue) => {
    setValue(newValue);
  };


  function validate(link) {
    if (link == 'https://www.') {
      alert('URL manzil kiriting')
      return
    }

    return true
  }


  return (
    <>
      <div>
        <Header></Header>
        <div className="container">
          <div className="hero">
            <div className="click">
              <Button className="clickmade">
                <ArrowBackIosIcon></ArrowBackIosIcon>
                <span className="click-title">Subloyiha ochish</span>
              </Button>
              <Button className="countinue" variant="contained" size="medium">
                Davom etish<ArrowForwardIosIcon></ArrowForwardIosIcon>
              </Button>
            </div>
            <div className="inputs">
              <div className="p_a_t">
                <div className="p_i">
                  <label htmlFor="project">Loyiha nomi</label>
                  <input
                    type="text"
                    placeholder="Loyiha nomi"
                    className="p_n"
                    value={projectName}
                    onChange={(e) => {e.target.value}}
                  />
                </div>
                <div className="tag">
                  <span>Tag</span>
                  <FormControl sx={{ width: 600 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Tag
                    </InputLabel>
                    <Select
                      sx={{ height: 50 }}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="s_f">
                <div className="p_i">
                  <label
                    htmlFor="project"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <img src={check} alt="" />
                    Boshlanish vaqti
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="boshlanish vaqti"
                        sx={{ width: 600 }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="finish">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <img src={check} alt="" />
                    Qancha vaqtda habar yuboriladi?
                  </label>
                  <FormControl sx={{ width: 600 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      O’sha zahoti
                    </InputLabel>
                    <Select
                      sx={{ height: 55 }}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="O’sha zahoti" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {howMuchTime.map((time) => (
                        <MenuItem key={time} value={time}>
                          <Checkbox checked={personName.indexOf(time) > -1} />
                          <ListItemText primary={time} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            <div className="timeLine">
              <div className="timeLine-title">
                <img src={check} alt="" />
                <span>Habar yuborilmaydigan vaqt</span>
              </div>

              <div className="time-line">

              </div>
            </div>

            <div className="added-massage">
              <h1 className="massage-title">Habarning ko'rinishi</h1>
              <div className="send-massage">
                <div className="send-massage-place">
                  <div className="shablon">
                    <label
                      htmlFor="demo-multiple-checkbox"
                      className="shablon-title"
                    >
                      Shablon
                    </label>
                    <FormControl sx={{ width: 600 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Shablon
                      </InputLabel>
                      <Select
                        sx={{ height: 55 }}
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Shablon" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="link">
                    <label htmlFor="project">Link</label>
                    <input type="text" placeholder="Link" className="p_n" value={link} onChange={(e) => {e.target.value}} />
                  </div>

                  <div className="desc-lang">
                    <div className="desc-lang-title">
                      <h1 style={{fontSize: "18px"}}>Habar</h1>
                      <a href='#' className="addSquare" style={{fontSize: "14px"}}><img src={addSquare} alt="add square" />Shablon holatida saqlash</a>
                    </div>
                    <Box sx={{ width: "100%" }}>
                      <Box>
                        <Tabs value={value} onChange={Change}>
                          <Tab label="O’zbekcha" {...a11yProps(0)} sx={{width: "200px", borderLeft: "1px solid #E2E2EA", borderTop: "1px solid #E2E2EA"}}/>
                          <Tab label="Русский" {...a11yProps(1)} sx={{width: "200px", borderLeft: "1px solid #E2E2EA", borderTop: "1px solid #E2E2EA"}}/>
                          <Tab label="English" {...a11yProps(2)} sx={{width: "200px", borderLeft: "1px solid #E2E2EA", borderTop: "1px solid #E2E2EA", borderRight: "1px solid #E2E2EA"}}/>
                        </Tabs>
                      </Box>
                      <CustomTabPanel value={value} index={0}>
                      <textarea value={uz} onChange={(e) => {e.target.value}} cols="65" rows="10" className="textarea" placeholder="Habar matni..."></textarea>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                      <textarea value={ru} onChange={(e) => {e.target.value}} cols="65" rows="10" className="textarea" placeholder="Текст сообщения..."></textarea>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={2}>
                      <textarea value={eng} onChange={(e) => {e.target.value}} cols="65" rows="10" className="textarea" placeholder="Message text..."></textarea>
                      </CustomTabPanel>
                    </Box>
                  </div>
                </div>

                <div className="for-img">
                  <img src={phone} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

