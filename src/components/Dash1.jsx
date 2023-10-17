import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  companyName: {
    flexGrow: 1, // This will push the company name to the right
  },
}));

const Dash1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.companyName} noWrap>
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <Container>
          <List>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Container>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Container>{/* Your visualisation widgets go here */}</Container>
      </main>
    </div>
  );
};

export default Dash1;
