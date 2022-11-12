import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Post",
    link: "/post",
  },
];

const Header = () => {
  return (
    <AppBar component="nav">
      <Box sx={{ display: "flex" }}>
        <Grid item xs={true}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
        </Grid>
        <Grid item xs={true}>
          <List sx={{ display: "flex" }}>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <Link to={item.link}>{item.label}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Header;
