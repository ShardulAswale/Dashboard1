import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './components/Dashboard';

const theme = createTheme(); // Create a theme

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;