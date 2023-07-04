import * as React from "react";
import { useState } from "react";
import useLogout from "../../hooks/useLogout";
import { NavLink, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import "./UserHeader.css";
import {
  Typography,
  Box,
  AppBar as MuiAppBar,
  Drawer as MuiDrawer,
  Toolbar,
  CssBaseline,
  Divider,
  IconButton,
} from "@mui/material";
import {
  List,
  Collapse,
  ListItemButton,
  ListItemText,
  ListItem,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#fff0",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
    backgroundColor: "#fff0",
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    backgroundColor: "#fff0",
  }),
}));

export default function UserHeadingBar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [open, setOpen] = useState(true);

  const handleSubMenu = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const [menuData, setMenuData] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const [displayItem, setDisplayItem] = useState("");
  const [selectedPath, setSelectedPath] = useState("");
  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleActiveClick = (text, subItems, link) => {
    setSelectedPath(link);
    setDisplayItem(text);
    setActiveMenuItem(text);
    setDisplaySubmenu(!displaySubmenu);
    navigate(link);
  };

  const menuItems = [
    {
      text: "Trang chủ",
      icon: "/assets/images/house.svg",
    },
    {
      text: "Hoạt động",
      icon: "/assets/images/activity.svg",
      subItems: [
        { text: "Giúp việc theo giờ", link: "action-record" },
        { text: "Tổng vệ sinh", link: "action-record/total-senitation" },
        { text: "Vệ sinh sofa, nệm", link: "action-record/fabric-cleaning" },
        { text: "Vệ sinh máy lạnh", link: "action-record/electronic-cleaning" },
      ],
    },
    {
      text: "Lịch sử",
      icon: "/assets/images/history.svg",
      link: "history",
    },
  ];
  const { logout } = useLogout(); // Call the useLogout hook

  const logoutHandler = async () => {
    await logout(); // Call the logout function from the useLogout hook
  };
  const icon = [
    {
      text: "Tài khoản",
      icon: "/assets/images/person.svg",
      link: "account-infor",
    },
    {
      text: "Đăng xuất",
      icon: "/assets/images/box-arrow-right.svg",
      onClick: logoutHandler,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#ffffff00", boxShadow: "none", border: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
          >
            <MenuIcon sx={{ color: "gray" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              letterSpacing: "0.05rem",
              fontFamily: "Montserrat",
              fontSize: "22px",
            }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          backgroundColor: "#ffffff00",
          "& .MuiDrawer-paper": { backgroundColor: "#ffffff00" },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}></IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ text, icon, link, subItems, onClick }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleActiveClick(text, subItems, link)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "flex-start" : "center",
                  px: 2.5,
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                }}
              >
                <img
                  className="nav-icon"
                  src={icon}
                  alt="icon"
                  style={{
                    width: "22px",
                    height: "22px",
                    marginRight: open ? "16px" : "0",
                    display: "inline-block",
                  }}
                />
                {open && (
                  <NavLink className="nav-link" to={link}>
                    {text}
                  </NavLink>
                )}
              </ListItemButton>

              {subItems && (
                <Collapse
                  in={open && activeMenuItem === text && displaySubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {subItems.map(
                      (
                        { text: subText, link: subLink } // destruct the link from sub-item
                      ) => (
                        <ListItemButton
                          key={subText}
                          component={NavLink}
                          to={subLink} // use the link from the sub-item
                          sx={{
                            pl: 8,
                            "&:hover": {
                              color: "rgb(120, 120, 120)",
                            },
                          }}
                        >
                          <ListItemText primary={subText} />
                        </ListItemButton>
                      )
                    )}
                  </List>
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {icon.map(({ text, icon, link, subItems, onClick }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() =>
                  onClick ? onClick() : handleActiveClick(text, subItems, link)
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "flex-start" : "center",
                  px: 2.5,
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                }}
              >
                <img
                  className="nav-icon"
                  src={icon}
                  alt="icon"
                  style={{
                    width: "22px",
                    height: "22px",
                    marginRight: open ? "16px" : "0",
                    display: "inline-block",
                  }}
                />
                {open && (
                  <NavLink className="nav-link" to={link}>
                    {text}
                  </NavLink>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
