import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Today } from './pages/Today/Today';
import { ByDate } from './pages/ByDate/ByDate';
import { Since } from './pages/Since/Since';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/by-date" element={<ByDate />} />
          <Route path="/since" element={<Since />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
