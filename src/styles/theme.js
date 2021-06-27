const { createGlobalStyle } = require('styled-components')

// I'm using rgb numbers here for easily using rgba styling throughout the app
// You can put hexcodes, names, or any other definitions that fits the context of your app
const colorPalette = {
  lighterShades: '230, 230, 230',
  lightShades: '242, 242, 241',
  lightAccent: '139, 142, 149',
  mainBrand: '162, 200, 129',
  darkAccent: '133, 129, 137',
  darkShades: '32, 30, 32',
  darkerShades: '28, 26, 28',

  success: '95, 153, 81',
  warning: '221, 136, 25',
  error: '244, 67, 54'
}

const baseTheme = {
  actions: {
    error: colorPalette.error,
    info: colorPalette.darkShades,
    primary: colorPalette.mainBrand,
    success: colorPalette.success,
    warning: colorPalette.warning
  },
  palette: {
    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
    darkerShades: colorPalette.darkerShades,
    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,
    lighterShades: colorPalette.lighterShades,
    mainBrand: colorPalette.mainBrand
  }
}

const darkTheme = {
  ...baseTheme,
  global: {
    bg: colorPalette.darkShades,
    color: colorPalette.lightShades,
    link: colorPalette.mainBrand,
    linkHover: colorPalette.lightAccent
  }
}

const lightTheme = {
  ...baseTheme,
  global: {
    bg: colorPalette.lightShades,
    color: colorPalette.darkShades,
    link: colorPalette.mainBrand,
    linkHover: colorPalette.darkAccent
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%; 
  }

  body {
    background-color: rgb(${props => props.theme.global.bg});
    color: rgb(${props => props.theme.global.color});
    transition: background 0.2s ease-out;
  }

  .layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  nav {
    background-color: rgb(${props => props.theme.palette.darkerShades});
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 3;
    height: 100%;
  }
  
  a {
    color: rgb(${props => props.theme.global.link});
  }
  
  a:hover {
    color: rgb(${props => props.theme.global.linkHover});
  }
`

module.exports = {
  lightTheme,
  darkTheme,
  GlobalStyle
}
