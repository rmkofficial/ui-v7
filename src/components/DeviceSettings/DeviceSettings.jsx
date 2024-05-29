import { useState } from "react";
import { AppBar, Tabs, Tab, Box, styled } from "@mui/material";
import GeneralSettings from "./Tab/GeneralSettings";
import EthernetSettings from "./Tab/EthernetSettings";
import RTCSettings from "./Tab/RTCSettings";
import MemInformation from "./Tab/MemInformation";
import PropTypes from "prop-types";

const StyledTabs = styled(Tabs)({
  backgroundColor: "#f5f5f5",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1976d2",
  },
});

const StyledTab = styled(Tab)({
  textTransform: "none",
  minWidth: 72,
  fontWeight: 600,
  marginRight: "10px",
  "&.Mui-selected": {
    color: "#1976d2",
  },
  "&:hover": {
    color: "#1976d2",
    opacity: 1,
  },
});

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
    <div>
      <AppBar position="static">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="device settings tabs"
        >
          <StyledTab label="RCU General Settings" {...a11yProps(0)} />
          <StyledTab label="Ethernet Settings" {...a11yProps(1)} />
          <StyledTab label="RTC Settings" {...a11yProps(2)} />
          <StyledTab label="Mem Information" {...a11yProps(3)} />
        </StyledTabs>
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
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default DeviceSettings;
