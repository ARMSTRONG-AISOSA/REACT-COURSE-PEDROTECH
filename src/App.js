import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/navbar/Navbar";
import Episode1 from './pages/episode1/Episode1';
import Episode2 from './pages/episode2/Episode2';
import Episode3 from './pages/episode3/Episode3';
import Episode4 from "./pages/episode4/Episode4";
import Episode5 from "./pages/episode5/Episode5";
import Episode6 from "./pages/episode6/Episode6";
import Episode7 from "./pages/episode7/Episode7";
import Episode8 from "./pages/episode8/Episode8";

import ErrorPage from './pages/errorpage/ErrorPage';

export const AppContext = createContext();

function App() {

  const [profileData, setProfileData] = useState([]);
  const client = new QueryClient();


  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ profileData, setProfileData }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/episode1" element={<Episode1 />} />

              <Route path="/episode2" element={<Episode2 />} />

              <Route path="/episode3" element={<Episode3 />} />

              <Route path="/episode4" element={<Episode4 />} />

              <Route path="/episode5" element={<Episode5 />} />

              <Route path="/episode6" element={<Episode6 />} />

              <Route path="/episode7" element={<Episode7 />} />

              <Route path="/episode8" element={<Episode8 />} />

              {/* Error Page */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div >
  );
}

export default App;
