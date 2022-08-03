import Header from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

function App() {
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
