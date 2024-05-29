import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";

const EthernetSettings = () => {
  return (
    <Box>
      <TextField
        label="IP Address"
        defaultValue="10.11.10.115"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Subnet Mask"
        defaultValue="255.255.255.0"
        fullWidth
        margin="normal"
      />
      <TextField
        label="GW IP Address"
        defaultValue="10.11.10.1"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Ip değişimini onaylıyorum."
      />
      <Button variant="contained" color="primary">
        Change Ethernet Settings
      </Button>
    </Box>
  );
};

export default EthernetSettings;
