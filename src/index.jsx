import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import Main from './Main/Main'
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </React.StrictMode>
)
