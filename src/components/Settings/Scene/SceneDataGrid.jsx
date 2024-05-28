import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const SceneDataGrid = ({ rows, setRows }) => {
  const handleEditCellChange = (params) => {
    const updatedRows = rows.map((row) =>
      row.id === params.id ? { ...row, [params.field]: params.value } : row
    );
    setRows(updatedRows);
  };

  const columns = [
    { field: "scene", headerName: "Scene", width: 150, editable: false },
    {
      field: "percentage",
      headerName: "Percentage",
      type: "number",
      width: 120,
      editable: true,
      align: "left",
      headerAlign: "left",
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onEditCellChangeCommitted={handleEditCellChange}
      />
    </div>
  );
};

SceneDataGrid.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      scene: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  setRows: PropTypes.func.isRequired,
};

export default SceneDataGrid;
