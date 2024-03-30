import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/thyme';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <AppRouter />
    </ThemeProvider>
  );
}

export default App;
