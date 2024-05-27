import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import data from "./data.json"; // JSON dosyasından veri alınması

const columns = [
  { field: "status", headerName: "Status", width: 120, editable: true },
  { field: "ip", headerName: "IP", width: 140, editable: true },
  { field: "port", headerName: "Port", width: 110, editable: true },
  {
    field: "workGroupName",
    headerName: "Work Group Name",
    width: 150,
    editable: true,
  },
  {
    field: "deviceName",
    headerName: "Device Name",
    width: 150,
    editable: true,
  },
  { field: "appState", headerName: "App State", width: 130, editable: true },
  {
    field: "powerSourcePeriod",
    headerName: "Power Source Period",
    width: 160,
    editable: true,
  },
  {
    field: "programState",
    headerName: "Program State",
    width: 140,
    editable: true,
  },
  { field: "serialNo", headerName: "Serial No", width: 140, editable: true },
  { field: "hwVersion", headerName: "HW Versiyon", width: 130, editable: true },
  { field: "swVersion", headerName: "SW versiyon", width: 130, editable: true },
  {
    field: "sceneGroupSettings",
    headerName: "Scene and Group Settings",
    width: 200,
    editable: true,
  },
  {
    field: "control",
    headerName: "Control",
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleButtonClick(params.row)}
      >
        Control
      </Button>
    ),
  },
];

const handleButtonClick = (row) => {
  console.log("Button clicked for row: ", row);
};

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
    renderCell: col.field !== "control" ? customCell : col.renderCell,
  }));

  const handleCellClick = (params, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (params, event) => {
    event.stopPropagation();
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
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
