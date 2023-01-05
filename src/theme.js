import React from "react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {

    primary: {
      main: '#FFCB5F',
      light: '#FE7CE5',
      dark: '	#9966cc',
      contrastText: '#000000'
    },

    secondary: {
      main: '#336666',
      light: '#996666',
      dark: '	#cc99cc',
      contrastText: '#000000'
    },

    // error: {
    //   main: '',
    //   light: '',
    //   dark: '',
    //   contrastText: ''
    // },

    // warning: {
    //   main: '',
    //   light: '',
    //   dark: '',
    //   contrastText: ''
    // },
    // info: {
    //   main: '',
    //   light: '',
    //   dark: '',
    //   contrastText: ''
    // },
    // success: {
    //   main: '',
    //   light: '',
    //   dark: '',
    //   contrastText: ''
    // },
  }

})

export default theme