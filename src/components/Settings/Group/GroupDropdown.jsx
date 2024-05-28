import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const GroupDropdown = ({ label, options, selectedOptions, handleChange }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              <Checkbox checked={selectedOptions.indexOf(option.name) > -1} />
              <ListItemText primary={option.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

GroupDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default GroupDropdown;
