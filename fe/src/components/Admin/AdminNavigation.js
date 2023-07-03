// import * as React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import useLogout from "../../hooks/useLogout";
// import "./AdminNavigation.css";
// import { useState } from "react";
// import Collapse from "@mui/material/Collapse";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import List from "@mui/material/List";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const AdminNavigation = () => {
//   const { logout } = useLogout(); // Call the useLogout hook

//   const logoutHandler = async () => {
//     await logout(); // Call the logout function from the useLogout hook
//   };

//   const [displayItem, setDisplayItem] = useState("");
//   const [selectedPath, setSelectedPath] = useState("");
//   const navigate = useNavigate();

//   const handleActiveClick = (event) => {
//     const value = event.target.innerHTML;
//     setSelectedPath(event.target.getAttribute("href"));
//     setDisplayItem(value);
//   };

//   const handleNavigateClick = (event) => {
//     const selectedService = event.target.innerHTML;
//     const link = `${selectedPath}/${selectedService}`;
//     navigate(link);
//   };

//   const [open, setOpen] = React.useState(false);
//   const handleSubMenu = () => {
//     setOpen(!open);
//   };
//   // code replace sidebar
//   const drawerWidth = 240;

//   const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: "hidden",
//   });
//   const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   }));

//   const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

//   const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//       width: drawerWidth,
//       flexShrink: 0,
//       whiteSpace: 'nowrap',
//       boxSizing: 'border-box',
//       ...(open && {
//         ...openedMixin(theme),
//         '& .MuiDrawer-paper': openedMixin(theme),
//       }),
//       ...(!open && {
//         ...closedMixin(theme),
//         '& .MuiDrawer-paper': closedMixin(theme),
//       }),
//     }),
//   );
//   export default function MiniDrawer() {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//       setOpen(true);
//     };

//     const handleDrawerClose = () => {
//       setOpen(false);
//     };
//   return (
//     <div className="nav-container admin-container">
//       <ul className="nav flex-column nav-content">
//         <li className="text-center ad-name mt-2 mb-2">Admin</li>
//         <li className="nav-item d-flex" type="button">
//           <img
//             className="nav-icon"
//             src="/assets/images/bar-chart.svg"
//             alt="icon"
//           ></img>
//           <NavLink className="nav-link" to="" onClick={handleActiveClick}>
//             Thống kê
//           </NavLink>
//         </li>
//         <li className="nav-item d-flex" type="button">
//           <img
//             className="nav-icon"
//             src="/assets/images/customers.svg"
//             alt="icon"
//           ></img>
//           <NavLink
//             className="nav-link"
//             to="edit-customer"
//             onClick={handleActiveClick}
//           >
//             Khách hàng
//           </NavLink>
//         </li>
//         {/* Phân chia nhân viên theo chuyên môn: Vdu vệ sinh định kỳ, dọn dẹp máy lạnh, ... */}
//         <li>
//           <NavLink
//             className="nav-link ad-services"
//             to="edit-employee"
//             onClick={handleActiveClick}
//           >
//             Nhân viên
//           </NavLink>
//           {displayItem === "Nhân viên" && (
//             <ul className="sub-menu">
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Giúp việc theo giờ
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Tổng vệ sinh
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Vệ sinh máy lạnh
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Vệ sinh nệm, sofa, thảm
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

// <li className="nav-item d-flex" type="button">
//   <img
//     className="nav-icon"
//     src="/assets/images/services.svg"
//     alt="icon"
//   ></img>
//   <NavLink className="nav-link" onClick={handleSubMenu}>
//     Dịch vụ
//   </NavLink>
// </li>

// <Collapse in={open} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//     <ListItemButton
//       component={NavLink}
//       to="#"
//       onClick={handleNavigateClick}
//       sx={{
//         pl: 5,
//         color: "rgb(120, 120, 120)",
//         "&:hover": {
//           backgroundColor: "#9dcec8",
//           color: "rgb(120, 120, 120)",
//         },
//       }}
//     >
//       <ListItemText primary="Giúp việc theo giờ" />
//     </ListItemButton>
//   </List>

//   <List component="div" disablePadding>
//     <ListItemButton
//       component={NavLink}
//       to="#"
//       onClick={handleNavigateClick}
//       sx={{
//         pl: 5,
//         color: "rgb(120, 120, 120)",
//         "&:hover": {
//           backgroundColor: "#9dcec8",
//           color: "rgb(120, 120, 120)",
//         },
//       }}
//     >
//       <ListItemText primary="Tổng vệ sinh" />
//     </ListItemButton>
//   </List>

//   <List component="div" disablePadding>
//     <ListItemButton
//       component={NavLink}
//       to="#"
//       onClick={handleNavigateClick}
//       sx={{
//         pl: 5,
//         color: "rgb(120, 120, 120)",
//         "&:hover": {
//           backgroundColor: "#9dcec8",
//           color: "rgb(120, 120, 120)",
//         },
//       }}
//     >
//       <ListItemText primary="Vệ sinh máy lạnh" />
//     </ListItemButton>
//   </List>

//   <List component="div" disablePadding>
//     <ListItemButton
//       component={NavLink}
//       to="#"
//       onClick={handleNavigateClick}
//       sx={{
//         pl: 5,
//         color: "rgb(120, 120, 120)",
//         "&:hover": {
//           backgroundColor: "#9dcec8",
//           color: "rgb(120, 120, 120)",
//         },
//       }}
//     >
//       <ListItemText primary="Vệ sinh sofa, nệm" />
//     </ListItemButton>
//   </List>
// </Collapse>

//         {/* Đơn hàng của admin thì update thêm thông tin trong page đơn hàng */}
//         <li>
//           <NavLink
//             className="nav-link ad-services"
//             to="order-service"
//             onClick={handleActiveClick}
//           >
//             Đơn hàng
//           </NavLink>
//           {displayItem === "Đơn hàng" && (
//             <ul className="sub-menu">
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Giúp việc theo giờ
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Tổng vệ sinh
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Vệ sinh máy lạnh
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="nav-link"
//                   to="#"
//                   onClick={handleNavigateClick}
//                 >
//                   Vệ sinh nệm, sofa, thảm
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="nav-item d-flex" type="button" onClick={logoutHandler}>
//           <img
//             className="nav-icon"
//             src="/assets/images/box-arrow-right.svg"
//             alt="icon"
//           ></img>
//           <NavLink className="nav-link" to="/">
//             Đăng xuất
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import useLogout from "../../hooks/useLogout";

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
  // necessary for content to be below app bar
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
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminNavigation() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menuData, setMenuData] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Icon = styled("img")(({ theme }) => ({
    minWidth: 0,
    mr: theme.spacing(2),
    justifyContent: "center",
  }));
  const navigate = useNavigate();
  const [displayItem, setDisplayItem] = useState("");
  const [selectedPath, setSelectedPath] = useState("");
  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleActiveClick = (text, subItems, link) => {
    setSelectedPath(link);
    setDisplayItem(text);
    setActiveMenuItem(text);
    if (subItems) {
      setDisplaySubmenu(!displaySubmenu);
    } else {
      navigate(link);
    }
  };

  const handleNavigateClick = (event) => {
    const selectedService = event.target.innerHTML;
    const link = `${selectedPath}/${selectedService}`;
    navigate(link);
  };

  const menuItems = [
    {
      text: "Thống kê",
      icon: "/assets/images/bar-chart.svg",
    },
    {
      text: "Khách hàng",
      icon: "/assets/images/customers.svg",
      onClick: handleActiveClick,
      link: "edit-customer",
    },
    {
      text: "Nhân viên",
      icon: "/assets/images/person.svg",
      link: "edit-employee",
      subItems: [
        { text: "Giúp việc theo giờ" },
        { text: "Tổng vệ sinh" },
        { text: "Vệ sinh máy lạnh" },
        { text: "Vệ sinh sofa, nệm" },
      ],
    },
    {
      text: "Dịch vụ",
      icon: "/assets/images/services.svg",
      link: "edit-service",
      subItems: [
        { text: "Giúp việc theo giờ" },
        { text: "Tổng vệ sinh" },
        { text: "Vệ sinh máy lạnh" },
        { text: "Vệ sinh sofa, nệm" },
      ],
    },
  ];

  const { logout } = useLogout();

  const logoutHandler = async () => {
    await logout();
  };

  const icon = [
    {
      text: "Đơn hàng",
      icon: "/assets/images/gear.svg",
      link: "order-service",
      subItems: [
        { text: "Giúp việc theo giờ" },
        { text: "Tổng vệ sinh" },
        { text: "Vệ sinh máy lạnh" },
        { text: "Vệ sinh sofa, nệm" },
      ],
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
        sx={{ backgroundColor: "white", boxShadow: "none" }}
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
              fontFamily: "Work Sans",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ text, icon, link, subItems, onClick }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleActiveClick(text, subItems, link)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Icon
                  className="nav-icon"
                  src={icon}
                  alt="icon"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    alignItems: "center",
                    mr: 3,
                    width: "10%",
                  }}
                />
                <NavLink className="nav-link" to={link}>
                  {text}
                </NavLink>
              </ListItemButton>

              {subItems && (
                <Collapse
                  in={open && activeMenuItem === text && displaySubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {subItems.map(({ text: subText }) => (
                      <ListItemButton
                        key={subText}
                        component={NavLink}
                        onClick={handleNavigateClick}
                        to="#"
                        sx={{
                          pl: 10,
                          color: "rgb(120, 120, 120)",
                          "&:hover": {
                            backgroundColor: "#9dcec8",
                            color: "rgb(120, 120, 120)",
                          },
                        }}
                      >
                        <ListItemText primary={subText} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {icon.map(({ text, icon, link, subItems,  onClick }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
              onClick={() => (onClick ? onClick() : handleActiveClick(text, subItems, link))}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Icon
                  className="nav-icon"
                  src={icon}
                  alt="icon"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    alignItems: "center",
                    mr: 3,
                    width: "10%",
                  }}
                />
                <NavLink className="nav-link" to={link}>
                  {text}
                </NavLink>
              </ListItemButton>
              {subItems && (
                <Collapse
                  in={open && activeMenuItem === text && displaySubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {subItems.map(({ text: subText }) => (
                      <ListItemButton
                        key={subText}
                        component={NavLink}
                        onClick={handleNavigateClick}
                        to="#"
                        sx={{
                          pl: 10,
                          color: "rgb(120, 120, 120)",
                          "&:hover": {
                            backgroundColor: "#9dcec8",
                            color: "rgb(120, 120, 120)",
                          },
                        }}
                      >
                        <ListItemText primary={subText} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
