import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { useState } from 'react'
import { ContextCartCount } from './utils/context-cart'

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <>
      <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
      </ContextCartCount.Provider>
    </>
  )
}

export default App
