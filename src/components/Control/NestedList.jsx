import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const data = {
  wg: {
    name: "WG",
    rcus: [
      {
        name: "RCU 1",
        groups: [
          {
            name: "Group 1",
            individuals: ["ind 1", "ind 2"],
          },
          {
            name: "Group 2",
            individuals: [],
          },
        ],
      },
      {
        name: "RCU 2",
        groups: [
          {
            name: "Group 1",
            individuals: ["ind 1", "ind 2"],
          },
          {
            name: "Group 2",
            individuals: [],
          },
        ],
      },
      {
        name: "RCU 3",
        groups: [
          {
            name: "Group 1",
            individuals: ["ind 1", "ind 2"],
          },
          {
            name: "Group 2",
            individuals: [],
          },
        ],
      },
    ],
  },
};

const NestedList = ({ onSelectionChange }) => {
  const [open, setOpen] = useState({});
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const initialOpenState = {};
    const initialCheckedState = {};
    initialOpenState["wg"] = false;
    initialCheckedState["wg"] = false;
    data.wg.rcus.forEach((rcu, rcuIndex) => {
      initialOpenState[`rcu-${rcuIndex}`] = false;
      initialCheckedState[`rcu-${rcuIndex}`] = false;
      rcu.groups.forEach((group, groupIndex) => {
        initialOpenState[`rcu-${rcuIndex}-group-${groupIndex}`] = false;
        initialCheckedState[`rcu-${rcuIndex}-group-${groupIndex}`] = false;
        group.individuals.forEach((ind, indIndex) => {
          initialCheckedState[
            `rcu-${rcuIndex}-group-${groupIndex}-ind-${indIndex}`
          ] = false;
        });
      });
    });
    setOpen(initialOpenState);
    setChecked(initialCheckedState);
  }, []);

  const handleToggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheck = (key, isWg, isRcu, isGroup, rcuIndex, groupIndex) => {
    setChecked((prev) => {
      const newChecked = { ...prev, [key]: !prev[key] };

      if (isWg) {
        data.wg.rcus.forEach((rcu, rcuIndex) => {
          newChecked[`rcu-${rcuIndex}`] = !prev[key];
          rcu.groups.forEach((group, gIndex) => {
            newChecked[`rcu-${rcuIndex}-group-${gIndex}`] = !prev[key];
            group.individuals.forEach((ind, indIndex) => {
              newChecked[`rcu-${rcuIndex}-group-${gIndex}-ind-${indIndex}`] =
                !prev[key];
            });
          });
        });
      } else if (isRcu) {
        data.wg.rcus[rcuIndex].groups.forEach((group, gIndex) => {
          newChecked[`rcu-${rcuIndex}-group-${gIndex}`] = !prev[key];
          group.individuals.forEach((ind, indIndex) => {
            newChecked[`rcu-${rcuIndex}-group-${gIndex}-ind-${indIndex}`] =
              !prev[key];
          });
        });
      } else if (isGroup) {
        data.wg.rcus[rcuIndex].groups[groupIndex].individuals.forEach(
          (ind, indIndex) => {
            newChecked[`rcu-${rcuIndex}-group-${groupIndex}-ind-${indIndex}`] =
              !prev[key];
          }
        );
      }

      onSelectionChange(
        Object.keys(newChecked).filter((key) => newChecked[key])
      );
      return newChecked;
    });
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <ListItem
        sx={{ cursor: "pointer", "&:hover": { bgcolor: "action.hover" } }}
        onClick={() => handleToggle("wg")}
      >
        <Checkbox
          checked={!!checked["wg"]}
          onClick={(event) => event.stopPropagation()}
          onChange={() => handleCheck("wg", true, false, false)}
          sx={{ cursor: "pointer" }}
        />
        <ListItemText primary="WG" />
        {open["wg"] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open["wg"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.wg.rcus.map((rcu, rcuIndex) => (
            <div key={`rcu-${rcuIndex}`}>
              <ListItem
                sx={{
                  pl: 4,
                  cursor: "pointer",
                  "&:hover": { bgcolor: "action.hover" },
                }}
                onClick={() => handleToggle(`rcu-${rcuIndex}`)}
              >
                <Checkbox
                  checked={!!checked[`rcu-${rcuIndex}`]}
                  onClick={(event) => event.stopPropagation()}
                  onChange={() =>
                    handleCheck(`rcu-${rcuIndex}`, false, true, false, rcuIndex)
                  }
                  sx={{ cursor: "pointer" }}
                />
                <ListItemText primary={rcu.name} />
                {open[`rcu-${rcuIndex}`] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={open[`rcu-${rcuIndex}`]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {rcu.groups.map((group, groupIndex) => (
                    <div key={`rcu-${rcuIndex}-group-${groupIndex}`}>
                      <ListItem
                        sx={{
                          pl: 8,
                          cursor: "pointer",
                          "&:hover": { bgcolor: "action.hover" },
                        }}
                        onClick={() =>
                          handleToggle(`rcu-${rcuIndex}-group-${groupIndex}`)
                        }
                      >
                        <Checkbox
                          checked={
                            !!checked[`rcu-${rcuIndex}-group-${groupIndex}`]
                          }
                          onClick={(event) => event.stopPropagation()}
                          onChange={() =>
                            handleCheck(
                              `rcu-${rcuIndex}-group-${groupIndex}`,
                              false,
                              false,
                              true,
                              rcuIndex,
                              groupIndex
                            )
                          }
                          sx={{ cursor: "pointer" }}
                        />
                        <ListItemText primary={group.name} />
                        {open[`rcu-${rcuIndex}-group-${groupIndex}`] ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItem>
                      <Collapse
                        in={open[`rcu-${rcuIndex}-group-${groupIndex}`]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {group.individuals.map((ind, indIndex) => (
                            <ListItem
                              button
                              sx={{
                                pl: 12,
                                cursor: "pointer",
                                "&:hover": { bgcolor: "action.hover" },
                              }}
                              key={`rcu-${rcuIndex}-group-${groupIndex}-ind-${indIndex}`}
                            >
                              <Checkbox
                                checked={
                                  !!checked[
                                    `rcu-${rcuIndex}-group-${groupIndex}-ind-${indIndex}`
                                  ]
                                }
                                onClick={(event) => event.stopPropagation()}
                                onChange={() =>
                                  handleCheck(
                                    `rcu-${rcuIndex}-group-${groupIndex}-ind-${indIndex}`,
                                    false,
                                    false,
                                    false,
                                    rcuIndex,
                                    groupIndex
                                  )
                                }
                                sx={{ cursor: "pointer" }}
                              />
                              <ListItemText primary={ind} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

NestedList.propTypes = {
  onSelectionChange: PropTypes.func.isRequired,
};

export default NestedList;
