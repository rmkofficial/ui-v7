import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PropTypes from "prop-types";

const FormComponent = ({ onSave, selectedRow }) => {
  const [dapc, setDapc] = useState(0);
  const [callScene, setCallScene] = useState("");
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [lastLightLevel, setLastLightLevel] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    if (selectedRow) {
      setDapc(selectedRow.dapc || 0);
      setCallScene(selectedRow.callScene || "");
      setMax(selectedRow.max || 0);
      setMin(selectedRow.min || 0);
      setLastLightLevel(selectedRow.lastLightLevel || 0);
      setIsSwitchOn(selectedRow.isSwitchOn || false);
    }
  }, [selectedRow]);

  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

  const handleDapcChange = (delta) => setDapc(clamp(dapc + delta, 0, 100));
  const handleMaxChange = (delta) => setMax(clamp(max + delta, 0, 100));
  const handleMinChange = (delta) => setMin(clamp(min + delta, 0, 100));
  const handleLastLightLevelChange = (delta) =>
    setLastLightLevel(clamp(lastLightLevel + delta, 0, 100));

  const handleInputChange = (setter) => (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setter(clamp(value, 0, 100));
    }
  };

  const scenes = Array.from({ length: 32 }, (_, i) => `Scene ${i + 1}`);

  const handleSave = () => {
    const formData = {
      dapc,
      callScene,
      max,
      min,
      lastLightLevel,
      isSwitchOn,
    };
    onSave(formData);
  };

  return (
    <Box
      sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, maxWidth: 400 }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <InputLabel>DAPC (%)</InputLabel>
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => handleDapcChange(-1)}>
              <RemoveIcon />
            </IconButton>
            <TextField
              variant="outlined"
              value={dapc}
              onChange={handleInputChange(setDapc)}
              size="small"
              sx={{ mx: 1, width: "100px" }}
            />
            <IconButton onClick={() => handleDapcChange(1)}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Call Scene</InputLabel>
            <Select
              value={callScene}
              onChange={(e) => setCallScene(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {scenes.map((scene, index) => (
                <MenuItem key={index} value={scene}>
                  {scene}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Max</InputLabel>
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => handleMaxChange(-1)}>
              <RemoveIcon />
            </IconButton>
            <TextField
              variant="outlined"
              value={max}
              onChange={handleInputChange(setMax)}
              size="small"
              sx={{ mx: 1, width: "100px" }}
            />
            <IconButton onClick={() => handleMaxChange(1)}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Min</InputLabel>
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => handleMinChange(-1)}>
              <RemoveIcon />
            </IconButton>
            <TextField
              variant="outlined"
              value={min}
              onChange={handleInputChange(setMin)}
              size="small"
              sx={{ mx: 1, width: "100px" }}
            />
            <IconButton onClick={() => handleMinChange(1)}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Last Light Level</InputLabel>
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => handleLastLightLevelChange(-1)}>
              <RemoveIcon />
            </IconButton>
            <TextField
              variant="outlined"
              value={lastLightLevel}
              onChange={handleInputChange(setLastLightLevel)}
              size="small"
              sx={{ mx: 1, width: "100px" }}
            />
            <IconButton onClick={() => handleLastLightLevelChange(1)}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Switch
              checked={isSwitchOn}
              onChange={() => setIsSwitchOn(!isSwitchOn)}
            />
            <InputLabel>{isSwitchOn ? "ON" : "OFF"}</InputLabel>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSave}
          >
            SAVE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

FormComponent.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedRow: PropTypes.object,
};

export default FormComponent;
