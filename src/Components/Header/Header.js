import React, { useState } from "react";
const useStyles = makeStyles({
    rightToolbar: {
      marginLeft: "auto",
      marginRight: 10,
    },
    menuButton: {
      marginRight: 16,
      marginLeft: -12,
    },
  });
  
  export default function Header({ setDark }) {
    //state controle dark and light mode
    const [darkMode, setDarkMode] = useState(false);
  
    const classes = useStyles();
    const theme = createMuiTheme({
      palette: {
        type: darkMode ? "dark" : "light",
      },
    });