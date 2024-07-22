import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Episode1 from './pages/episode1/Episode1';
import Episode2 from './pages/episode2/Episode2';
import Episode3 from './pages/episode3/Episode3';
import Episode4 from "./pages/episode4/Episode4";
import Episode5 from "./pages/episode5/Episode5";
import Episode6 from "./pages/episode6/Episode6";

import ErrorPage from './pages/errorpage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/episode1" element={<Episode1 />} />

          <Route path="/episode2" element={<Episode2 />} />

          <Route path="/episode3" element={<Episode3 />} />

          <Route path="/episode4" element={<Episode4 />} />

          <Route path="/episode5" element={<Episode5 />} />

          <Route path="/episode6" element={<Episode6 />} />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
