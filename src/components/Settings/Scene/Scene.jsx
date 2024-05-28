import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SceneDropdown from "./SceneDropdown";
import SceneDataGrid from "./SceneDataGrid";
import setDataJson from "../../setData.json";
import PropTypes from "prop-types";

const Scene = ({ onSave }) => {
  const [data, setData] = useState({ individuals: [] });
  const [selectedIndividuals, setSelectedIndividuals] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setData(setDataJson);
    const initialRows = Array.from({ length: 32 }, (_, index) => ({
      id: index + 1,
      scene: `scene-${index + 1}`,
      percentage: Math.floor(Math.random() * 101),
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
    onSave(selectedData);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Box sx={{ width: "25%", paddingRight: 2 }}>
          <SceneDropdown
            label="Individual"
            options={data.individuals}
            selectedOptions={selectedIndividuals}
            handleChange={handleIndividualChange}
          />
        </Box>
        <Box sx={{ width: "75%", paddingLeft: 2 }}>
          <SceneDataGrid rows={rows} setRows={setRows} />
          <Box sx={{ marginTop: 2, display: "flex" }}>
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
      </Box>
    </Box>
  );
};

Scene.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default Scene;
