import { ExpandLess, ExpandMore} from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import * as icons from "@mui/icons-material";
import {
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const Accordion = ({ uri }) => {
  const [open, setOpen] = React.useState(false);
  const Icon = icons[uri.icon];

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* {console.log(uri)} */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon style={{ color: "#FFF" }}>
          {Icon ? <Icon /> : <icons.Delete />}
        </ListItemIcon>
        <ListItemText primary={uri.name} style={{ color: "#FFF" }} />

        {uri.submenu && (
          <>
            {open ? (
              <ExpandLess style={{ color: "#FFF" }} />
            ) : (
              <ExpandMore style={{ color: "#FFF" }} />
            )}
          </>
        )}
      </ListItemButton>
      {uri.submenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* {uri.submenu.map((suri, index) => {console.log(suri.name)})} */}
            {uri.submenu.map((suri, index) => {
              const Icon = icons[uri.icon];
              return (
                <ListItemButton key={index} sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "#FFF" }}>
                    {Icon ? <Icon /> : <icons.Delete />}
                  </ListItemIcon>
                  <ListItemText primary={suri.name} style={{ color: "#FFF" }} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default Accordion;
