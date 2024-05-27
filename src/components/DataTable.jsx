import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { styled } from "@mui/system";
import data from "./data.json";
import { columns } from "./Columns";

const StyledDataGrid = styled(DataGrid)({
  "& .MuiDataGrid-cell": {
    cursor: "pointer",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#e0f7fa",
  },
});

export default function DataTable() {
  const [rows, setRows] = useState(data);

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) =>
      row.id === newRow.id ? newRow : row
    );
    setRows(updatedRows);
    return newRow;
  };

  const customCell = (params) => (
    <div style={{ cursor: "pointer" }}>{params.value}</div>
  );

  const editableColumns = columns.map((col) => ({
    ...col,
    renderCell:
      col.field !== "control" &&
      col.field !== "sceneGroupSettings" &&
      col.field !== "status" &&
      col.field !== "appState" &&
      col.field !== "programState"
        ? customCell
        : col.renderCell,
  }));

  const handleCellClick = (params, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (params, event) => {
    event.stopPropagation();
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={editableColumns}
        processRowUpdate={handleProcessRowUpdate}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
