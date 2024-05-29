import { useState } from "react";
import { Box, Tab, Tabs, Button, AppBar } from "@mui/material";
import GeneralSettings from "./Tab/GeneralSettings";
import EthernetSettings from "./Tab/EthernetSettings";
import RTCSettings from "./Tab/RTCSettings";
import MemInformation from "./Tab/MemInformation";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const DeviceSettings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="device settings tabs"
        >
          <Tab label="RCU General Settings" {...a11yProps(0)} />
          <Tab label="Ethernet Settings" {...a11yProps(1)} />
          <Tab label="RTC Settings" {...a11yProps(2)} />
          <Tab label="Mem Information" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GeneralSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EthernetSettings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RTCSettings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MemInformation />
      </TabPanel>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Güncelle
        </Button>
        <Button variant="outlined" color="primary">
          İptal
        </Button>
      </Box>
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default DeviceSettings;
