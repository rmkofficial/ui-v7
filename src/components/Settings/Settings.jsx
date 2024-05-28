import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Scene from "./Scene/Scene";
import Group from "./Group/Group";
import PropTypes from "prop-types";

export default function Settings({ onSave, selectedRow }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="Settings Tabs">
        <Tab label="Scene" />
        <Tab label="Group" />
      </Tabs>
      {value === 0 && <Scene onSave={onSave} selectedRow={selectedRow} />}
      {value === 1 && <Group onSave={onSave} selectedRow={selectedRow} />}
    </Box>
  );
}

Settings.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedRow: PropTypes.object,
};
