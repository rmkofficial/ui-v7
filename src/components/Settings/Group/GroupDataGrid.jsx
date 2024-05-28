import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const GroupDataGrid = ({ rows, setRows }) => {
  const handleEditCellChange = (params) => {
    const updatedRows = rows.map((row) =>
      row.id === params.id ? { ...row, [params.field]: params.value } : row
    );
    setRows(updatedRows);
  };

  const columns = [
    { field: "group", headerName: "Group", width: 150, editable: false },
    {
      field: "value",
      headerName: "Value",
      type: "number",
      width: 120,
      editable: true,
      align: "left",
      headerAlign: "left",
      cellClassName: "super-app-theme--value",
      renderEditCell: (params) => (
        <input
          type="number"
          value={params.value}
          onChange={(e) =>
            params.api.setEditCellValue({
              id: params.id,
              field: params.field,
              value: Math.min(1, Math.max(0, Number(e.target.value))),
            })
          }
          min="0"
          max="1"
          step="1"
          style={{ width: "100%", padding: "8px", fontSize: "14px" }}
        />
      ),
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

GroupDataGrid.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      group: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  setRows: PropTypes.func.isRequired,
};

export default GroupDataGrid;
