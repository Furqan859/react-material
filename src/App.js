import Header from './component/Header';
import Footer from './component/Footer';
import Index from './component/Index';
import Typography from '@mui/material/Typography';

import {createTheme , ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      color:'red',
    },
  },
});

function App() {
  return (
    <Typography>

    <ThemeProvider theme={theme}>
  <Header/>

  <Index/>
  </ThemeProvider>
  <Footer/>
    
  
    </Typography>
  );
}

export default App;
