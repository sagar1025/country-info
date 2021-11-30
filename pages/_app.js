import { ThemeProvider } from 'styled-components'
import useDarkMode from "../hooks/useDarkMode.js";
import '../styles/global.scss'


function MainApp({Component, darkMode ,pageProps}) {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <ThemeProvider theme={{ darkMode: colorTheme }}>
          <Component {...pageProps} />
        </ThemeProvider>
      )
}

export default MainApp