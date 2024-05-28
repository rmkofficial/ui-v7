import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GroupDropdown from "./GroupDropdown";
import GroupDataGrid from "./GroupDataGrid";
import setDataJson from "../../setData.json";
import PropTypes from "prop-types";

const Group = ({ onSave }) => {
  const [data, setData] = useState({ individuals: [] });
  const [selectedIndividuals, setSelectedIndividuals] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setData(setDataJson);
    const initialRows = Array.from({ length: 32 }, (_, index) => ({
      id: index + 1,
      group: `group-${index + 1}`,
      value: Math.round(Math.random()),
    }));
    setRows(initialRows);
  }, []);

  const handleIndividualChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedIndividuals(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSave = () => {
    const selectedData = {
      individuals: selectedIndividuals,
      dataGrid: rows,
    };
    console.log("Selected Data:", JSON.stringify(selectedData, null, 2));
    onSave(selectedData);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mb: 2 }}>
        <Box sx={{ width: "25%", paddingRight: 1 }}>
          <GroupDropdown
            label="Individual"
            options={data.individuals}
            selectedOptions={selectedIndividuals}
            handleChange={handleIndividualChange}
          />
        </Box>
        <Box sx={{ width: "75%", paddingLeft: 2, ml: 5, paddingRight: 5 }}>
          <GroupDataGrid rows={rows} setRows={setRows} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          SAVE
        </Button>
      </Box>
    </Box>
  );
};

Group.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default Group;
