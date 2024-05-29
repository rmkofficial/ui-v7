import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";
import Control from "../Control/Control";
import propTypes from "prop-types";

const ControlDialog = ({ open, onClose, onSave, selectedRow }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle>Control Form</DialogTitle>
    <DialogContent dividers={true} sx={{ overflowX: "hidden" }}>
      <Control onSave={onSave} selectedRow={selectedRow} />
    </DialogContent>
    <DialogActions>
      <MuiButton onClick={onClose} color="secondary">
        Cancel
      </MuiButton>
    </DialogActions>
  </Dialog>
);

ControlDialog.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  onSave: propTypes.func.isRequired,
  selectedRow: propTypes.object,
};

export default ControlDialog;
