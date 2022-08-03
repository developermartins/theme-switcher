import Header from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from  './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import ContentSection from './pages/Content';

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <ContentSection />
        </ThemeProvider>
    </div>
  );
};

export default App;
