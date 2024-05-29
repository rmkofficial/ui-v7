import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";
import Settings from "../Settings/Settings";
import propTypes from "prop-types";

const SettingsDialog = ({ open, onClose, onSave, selectedRow }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle>Settings Form</DialogTitle>
    <DialogContent dividers={true} sx={{ overflowX: "hidden" }}>
      <Settings onSave={onSave} selectedRow={selectedRow} />
    </DialogContent>
    <DialogActions>
      <MuiButton onClick={onClose} color="secondary">
        Cancel
      </MuiButton>
    </DialogActions>
  </Dialog>
);

SettingsDialog.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  onSave: propTypes.func.isRequired,
  selectedRow: propTypes.object,
};

export default SettingsDialog;
