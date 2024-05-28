import { useState } from "react";
import Grid from "@mui/material/Grid";
import FormComponent from "./FormComponent"; // Import FormComponent
import NestedList from "./NestedList"; // Import NestedList
import PropTypes from "prop-types";

const Control = ({ onSave, selectedRow }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSave = (formData) => {
    const combinedData = {
      ...formData,
      selectedItems,
    };
    onSave(combinedData);
  };

  const handleSelectionChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item xs={4}>
        <NestedList onSelectionChange={handleSelectionChange} />
      </Grid>
      <Grid item xs={8}>
        <FormComponent onSave={handleSave} selectedRow={selectedRow} />
      </Grid>
    </Grid>
  );
};

Control.propTypes = {
  onSave: PropTypes.func.isRequired,
  selectedRow: PropTypes.object,
};

export default Control;
