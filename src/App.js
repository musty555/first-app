import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
  
    </Routes>
   
  );
}

export default App;
