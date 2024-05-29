import { TextField, Button, Box } from "@mui/material";

const GeneralSettings = () => {
  return (
    <Box>
      <TextField
        label="RCU Name"
        defaultValue="lwRCU-9005"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Occupancy Detection Time"
        defaultValue="600000"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default GeneralSettings;
