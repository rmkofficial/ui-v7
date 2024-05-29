import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";
import DeviceSettings from "../DeviceSettings/DeviceSettings";
import propTypes from "prop-types";

const DeviceSettingsDialog = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle>Device Settings</DialogTitle>
    <DialogContent dividers={true} sx={{ overflowX: "hidden" }}>
      <DeviceSettings />
    </DialogContent>
    <DialogActions>
      <MuiButton onClick={onClose} color="secondary">
        Cancel
      </MuiButton>
    </DialogActions>
  </Dialog>
);

DeviceSettingsDialog.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
};

export default DeviceSettingsDialog;
