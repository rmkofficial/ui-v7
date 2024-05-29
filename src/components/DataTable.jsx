import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { styled } from "@mui/system";
import data from "./data.json";
import { columns } from "../utils/Columns";
import ControlDialog from "./Dialogs/ControlDialog";
import SettingsDialog from "./Dialogs/SettingsDialog";
import DeviceSettingsDialog from "./Dialogs/DeviceSettingsDialog";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [selectedSettingsRow, setSelectedSettingsRow] = useState(null);
  const [deviceSettingsModalOpen, setDeviceSettingsModalOpen] = useState(false);

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

  const editableColumns = columns(
    setModalOpen,
    setSelectedRow,
    setSettingsModalOpen,
    setSelectedSettingsRow,
    setDeviceSettingsModalOpen
  ).map((col) => ({
    ...col,
    renderCell:
      col.field !== "control" &&
      col.field !== "sceneGroupSettings" &&
      col.field !== "status" &&
      col.field !== "appState" &&
      col.field !== "programState" &&
      col.field !== "deviceName"
        ? customCell
        : col.renderCell,
  }));

  const handleCellClick = (params, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (params, event) => {
    event.stopPropagation();
  };

  const handleSave = (formData) => {
    console.log(
      "Form data and selected items:",
      JSON.stringify(formData, null, 2)
    );
    setModalOpen(false);
  };

  const handleSettingsSave = (formData) => {
    console.log(
      "Settings data and selected items:",
      JSON.stringify(formData, null, 2)
    );
    setSettingsModalOpen(false);
  };

  const handleDeviceSettingsClose = () => {
    setDeviceSettingsModalOpen(false);
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
      <ControlDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        selectedRow={selectedRow}
      />
      <SettingsDialog
        open={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        onSave={handleSettingsSave}
        selectedRow={selectedSettingsRow}
      />
      <DeviceSettingsDialog
        open={deviceSettingsModalOpen}
        onClose={handleDeviceSettingsClose}
      />
    </div>
  );
}
