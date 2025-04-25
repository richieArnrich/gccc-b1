import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* implement routes:- define which page opens on what url */}
      <BrowserRouter>
        <Routes>
          {/* define the page urls */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
