import React from 'react'
import theme from './common/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const WrapperGlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato');
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-size: 17px;
    background-color: ${theme.colors.white_2};
  }
`

export default function GlobalStyled({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <WrapperGlobalStyled />
        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}
