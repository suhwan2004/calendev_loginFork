import { Route, Routes } from 'react-router-dom';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import themes from './styles/themes';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import Header from './components/Header';

function App() {
  const theme = responsiveFontSizes(createTheme(themes));
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
