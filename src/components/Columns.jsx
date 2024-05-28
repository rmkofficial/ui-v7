import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";

const handleControlButtonClick = (row, setModalOpen, setSelectedRow) => {
  setSelectedRow(row);
  setModalOpen(true);
};

const handleSettingsButtonClick = (
  row,
  setSettingsModalOpen,
  setSelectedSettingsRow
) => {
  setSelectedSettingsRow(row);
  setSettingsModalOpen(true);
};

const renderStatusCell = (params) => {
  let color;
  switch (params.value) {
    case "Active":
      color = "green";
      break;
    case "Inactive":
      color = "red";
      break;
    default:
      color = "black";
  }
  return <div style={{ color }}>{params.value}</div>;
};

const renderAppStateCell = (params) => {
  let color;
  switch (params.value) {
    case "Running":
      color = "green";
      break;
    case "Stopped":
      color = "red";
      break;
    default:
      color = "black";
  }
  return <div style={{ color }}>{params.value}</div>;
};

const renderProgramStateCell = (params) => {
  let color;
  switch (params.value) {
    case "On":
      color = "green";
      break;
    case "Off":
      color = "red";
      break;
    default:
      color = "black";
  }
  return <div style={{ color }}>{params.value}</div>;
};

export const columns = (
  setModalOpen,
  setSelectedRow,
  setSettingsModalOpen,
  setSelectedSettingsRow
) => [
  {
    field: "status",
    headerName: "Status",
    width: 120,
    editable: true,
    renderCell: renderStatusCell,
  },
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
  {
    field: "appState",
    headerName: "App State",
    width: 130,
    editable: true,
    renderCell: renderAppStateCell,
  },
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
    renderCell: renderProgramStateCell,
  },
  { field: "serialNo", headerName: "Serial No", width: 140, editable: true },
  { field: "hwVersion", headerName: "HW Versiyon", width: 130, editable: true },
  { field: "swVersion", headerName: "SW versiyon", width: 130, editable: true },
  {
    field: "sceneGroupSettings",
    headerName: "Scene and Group Settings",
    width: 200,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="secondary"
        startIcon={<SettingsIcon />}
        onClick={() =>
          handleSettingsButtonClick(
            params.row,
            setSettingsModalOpen,
            setSelectedSettingsRow
          )
        }
      >
        Settings
      </Button>
    ),
  },
  {
    field: "control",
    headerName: "Control",
    width: 160,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        startIcon={<ControlCameraIcon />}
        onClick={() =>
          handleControlButtonClick(params.row, setModalOpen, setSelectedRow)
        }
      >
        Control
      </Button>
    ),
  },
];
