import { List } from "@mui/material";
import Accordion from "./Accordion";

const SideNavbar = () => {
  const URLLinks = [
    {
      id: 0,
      name: "Dashboard",
      icon: "Home",
    },
    {
      id: 1,
      name: "Product",
      icon: "LocalOffer",
      submenu: [
        {
          name: "Product 1",
          icon: "Category",
        },
      ],
    },
    {
      id: 2,
      name: "Customer",
      icon: "People",
      submenu: [
        {
          name: "Customer 1",
          icon: "Person",
        },
      ],
    },
    {
      id: 3,
      name: "Income",
      icon: "AttachMoney",
      submenu: [
        {
          name: "Income 1",
          icon: "MonetizationOn",
        },
      ],
    },
    {
      id: 4,
      name: "Promote",
      icon: "ListAlt",
      submenu: [
        {
          name: "Promotion 1",
          icon: "Label",
        },
      ],
    },
    {
      id: 5,
      name: "Help",
      icon: "Help",
      submenu: [
        {
          name: "Help 1",
          icon: "HelpOutline",
        },
      ],
    },
  ];

  return (
    <List>
      {/* {["Dashboard", "Product", "Customer", "Income", "Promote", "Help"].map(
        (text, index) => (
          <ListItemButton key={text}>
            <ListItemIcon style={{ color: "#FFF" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} style={{ color: "#FFF" }} />
          </ListItemButton>
        )
      )} */}
      {URLLinks.map((uri) => (
        <Accordion key={uri.id} uri={uri} />
      ))}
    </List>
  );
};

export default SideNavbar;
