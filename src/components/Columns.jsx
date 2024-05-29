import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import InfoIcon from "@mui/icons-material/Info";

const handleControlButtonClick = (row, setModalOpen, setSelectedRow) => {
  console.log("Control button clicked for row:", row);
  setSelectedRow(row);
  setModalOpen(true);
};

const handleDeviceSettingsButtonClick = (
  row,
  setDeviceSettingsModalOpen,
  setSelectedRow
) => {
  console.log("DeviceSettings button clicked for row:", row);
  setSelectedRow(row);
  setDeviceSettingsModalOpen(true);
};

const handleSettingsButtonClick = (
  row,
  setSettingsModalOpen,
  setSelectedSettingsRow
) => {
  console.log("Settings button clicked for row:", row);
  setSelectedSettingsRow(row);
  setSettingsModalOpen(true);
};

const handleDetailsButtonClick = (row) => {
  console.log("Details button clicked for row:", row);
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
  setSelectedSettingsRow,
  setDeviceSettingsModalOpen
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
    width: 330,
    editable: true,
    renderCell: (params) => (
      <div>
        {params.value}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<SettingsIcon />}
          onClick={() =>
            handleDeviceSettingsButtonClick(
              params.row,
              setDeviceSettingsModalOpen,
              setSelectedRow
            )
          }
          size="small"
          style={{ marginLeft: 10 }}
        >
          Settings
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<InfoIcon />}
          onClick={() => handleDetailsButtonClick(params.row)}
          size="small"
          style={{ marginLeft: 10 }}
        >
          Details
        </Button>
      </div>
    ),
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
  { field: "hwVersion", headerName: "HW Version", width: 130, editable: true },
  { field: "swVersion", headerName: "SW Version", width: 130, editable: true },
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
