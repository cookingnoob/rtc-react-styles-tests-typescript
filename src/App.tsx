import { ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import Home from './pages/Home'

const theme = createTheme({
  typography:{
    fontFamily:[
      "Diphylleia", 'serif'
    ].join(',')
  },
  palette:{
    primary: {
      main: '#FFFAD2'
    }
  }
  });

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
