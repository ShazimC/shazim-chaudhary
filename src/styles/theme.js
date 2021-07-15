const { createGlobalStyle } = require('styled-components')
// I'm using rgb numbers here for easily using rgba styling throughout the app
// You can put hexcodes, names, or any other definitions that fits the context of your app
const colorPalette = {
  lightestShades: '180, 180, 180',
  lighterShades: '235, 235, 235',
  lightShades: '250, 250, 250',
  lightAccent: '139, 142, 149',
  mainBrandLight: '82, 140, 49',
  mainBrandDark: '142, 200, 109',
  darkAccent: '123, 119, 127',
  darkShades: '37, 35, 37',
  darkerShades: '28, 26, 28',
  darkestShades: '5, 5, 5',

  success: '95, 153, 81',
  warning: '221, 136, 25',
  error: '244, 67, 54'
}

const baseTheme = {
  actions: {
    error: colorPalette.error,
    info: colorPalette.darkShades,
    primary: colorPalette.mainBrandDark,
    success: colorPalette.success,
    warning: colorPalette.warning
  },
  palette: {
    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
    darkerShades: colorPalette.darkerShades,
    darkestShades: colorPalette.darkestShades,
    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,
    lighterShades: colorPalette.lighterShades,
    lightestShades: colorPalette.lightestShades,
    mainBrandLight: colorPalette.mainBrandLight,
    mainBrandDark: colorPalette.mainBrandDark
  }
}

const darkTheme = {
  ...baseTheme,
  global: {
    bg: colorPalette.darkShades,
    bg2: colorPalette.darkerShades,
    border: colorPalette.darkestShades,
    color: colorPalette.lightShades,
    link: colorPalette.mainBrandDark,
    linkHover: colorPalette.lightAccent
  }
}

const lightTheme = {
  ...baseTheme,
  global: {
    bg: colorPalette.lightShades,
    bg2: colorPalette.lighterShades,
    border: colorPalette.lightestShades,
    color: colorPalette.darkShades,
    link: colorPalette.mainBrandLight,
    linkHover: colorPalette.darkAccent
  }
}

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper{
    min-height: 100% !important;
    height: 100%;
  }

  body {
    background-color: rgb(${props => props.theme.global.bg});
    color: rgb(${props => props.theme.global.color});
    transition: background 0.2s ease-out;
  }

  .layout {
    background-color: rgb(${props => props.theme.global.bg});
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  nav {
    background-color: rgb(${props => props.theme.global.bg2});
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: 20%;
  }

  nav.sideNav {
    align-items: center;
    border-right: 1px solid rgb(${props => props.theme.global.border});
    left: 0;
  }

  nav.scrollNav {
    align-items: flex-end;
    border-right: 1px solid rgb(${props => props.theme.global.border});
    left: 0;
    justify-content: center;
  }

  .content {
    background-color: rgb(${props => props.theme.global.bg});
    display: flex;
    flex-direction: column;
    margin-left: 22.5%;
    height: 100%;
  }
  
  a {
    color: rgb(${props => props.theme.global.link});
  }
  
  a:hover {
    color: rgb(${props => props.theme.global.linkHover});
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(${props => props.theme.global.linkHover});
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(${props => props.theme.global.linkHover});
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* Styles */
    nav.sideNav {
      display: none;
    }
    .content {
      margin: 0;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 768px) and (max-device-width : 1023px) {
    /* Styles */
    nav.sideNav {
      display: none;
    }
    .content {
      margin: 0;
    }
  }
`

module.exports = {
  lightTheme,
  darkTheme,
  GlobalStyle
}
