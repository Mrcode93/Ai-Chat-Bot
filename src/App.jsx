// import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import { useState } from "react";
// import getLPTheme from "./getLPTheme";
// import { Button } from "@mui/material";
// import ChatPage from "./pages/ChatPage"; // import other pages similarly
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import { styled, alpha } from "@mui/material/styles";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import EditIcon from "@mui/icons-material/Edit";
// import Divider from "@mui/material/Divider";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "right",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === "light"
//         ? "rgb(55, 65, 81)"
//         : theme.palette.grey[300],
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "4px 0",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       "&:active": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity
//         ),
//       },
//     },
//   },
// }));
// function App() {
//   const [mode, setMode] = useState("light");
//   const [showCustomTheme, setShowCustomTheme] = useState(true);
//   const LPtheme = createTheme(getLPTheme(mode));
//   const defaultTheme = createTheme({ palette: { mode } });

//   const toggleColorMode = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   // menu button shows the side menu
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu((prev) => !prev);
//   };

//   return (
//     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
//       <CssBaseline />
//       {/* Toggle button to change theme */}
//       <Button
//         onClick={toggleColorMode}
//         sx={{
//           position: "absolute",
//           top: 10,
//           right: 10,
//           zIndex: 9999,
//           backgroundColor: "#479ee178",
//         }}
//       >
//         {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
//       </Button>
//       <MenuOutlinedIcon
//         sx={{
//           position: "absolute",
//           top: 10,
//           left: 10,
//           zIndex: 9999,
//           cursor: "pointer",
//           color: "text.primary",
//         }}
//         onClick={toggleMenu}
//       />

//       {showMenu && (
//         <div>
//           <Button
//             id="demo-customized-button"
//             aria-controls={open ? "demo-customized-menu" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? "true" : undefined}
//             variant="contained"
//             disableElevation
//             onClick={handleClick}
//             endIcon={<KeyboardArrowDownIcon />}
//           >
//             Options
//           </Button>
//           <StyledMenu
//             id="demo-customized-menu"
//             MenuListProps={{
//               "aria-labelledby": "demo-customized-button",
//             }}
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose} disableRipple>
//               <EditIcon />
//               Edit
//             </MenuItem>
//             <MenuItem onClick={handleClose} disableRipple>
//               <FileCopyIcon />
//               Duplicate
//             </MenuItem>
//             <Divider sx={{ my: 0.5 }} />
//             <MenuItem onClick={handleClose} disableRipple>
//               <ArchiveIcon />
//               Archive
//             </MenuItem>
//             <MenuItem onClick={handleClose} disableRipple>
//               <MoreHorizIcon />
//               More
//             </MenuItem>
//           </StyledMenu>
//         </div>
//       )}

//       <ChatPage />
//     </ThemeProvider>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  MenuItem,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatPage from "./pages/ChatPage";
import getLPTheme from "./getLPTheme";
import WelcomePage from "./pages/WelcomePage";

// Custom styled menu

const App = () => {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [visited, setVisited] = useState(false);

  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  useEffect(() => {
    localStorage.getItem("visited") === "true"
      ? setVisited(true)
      : setVisited(false);
  }, []);

  // Toggle light/dark mode
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Toggle side menu
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      {visited ? (
        <>
          {/* Toggle button to change theme */}
          <Button
            onClick={toggleColorMode}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 9999,
              backgroundColor: "#479ee178",
            }}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>

          {/* Menu toggle icon */}
          <MenuOutlinedIcon
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 9999,
              cursor: "pointer",
              color: "text.primary",
            }}
            onClick={toggleMenu}
          />

          {showMenu && (
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 40,
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "#f3f3f3",
                borderRadius: 25,
              }}
            >
              <MenuItem
                sx={{ p: 1, color: "red" }}
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete this chat?")
                  )
                    if (localStorage.getItem("messages") !== null)
                      localStorage.clear();

                  window.location.reload();
                }}
              >
                <DeleteIcon sx={{ mr: 1 }} />
                Delete Chat
              </MenuItem>
            </div>
          )}

          <ChatPage />
        </>
      ) : (
        <WelcomePage />
      )}
    </ThemeProvider>
  );
};

export default App;
