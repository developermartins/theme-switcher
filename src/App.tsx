import Header from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from  './styles/themes/dark';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <div className="App">
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <Header />
        </ThemeProvider>
    </div>
  );
}

export default App;
