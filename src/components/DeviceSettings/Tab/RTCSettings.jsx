import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const RTCSettings = () => {
  return (
    <Box>
      <TextField
        label="Sunrise Time"
        defaultValue="29.06.2000 05:22:51"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Sunset Time"
        defaultValue="29.06.2000 20:21:06"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Live Date and Time"
        defaultValue="29.06.2000 16:35:32"
        fullWidth
        margin="normal"
      />
      <FormControlLabel control={<Checkbox />} label="Use PC Time" />
      <TextField label="GMT" defaultValue="3" fullWidth margin="normal" />
      <TextField
        label="Latitude"
        defaultValue="39.89652"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Longitude"
        defaultValue="32.85692"
        fullWidth
        margin="normal"
      />
      <Box display="flex" gap={2} mb={2}>
        <Button variant="contained" color="primary">
          Find My Location From IP
        </Button>
        <Button variant="contained" color="primary">
          Find Given Location
        </Button>
      </Box>
      <TextField label="Location" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default RTCSettings;
