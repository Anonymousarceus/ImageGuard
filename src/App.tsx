import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Examples } from './pages/Examples';
import { ApiDocs } from './pages/ApiDocs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/api" element={<ApiDocs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
