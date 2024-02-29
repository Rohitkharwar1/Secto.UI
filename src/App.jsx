import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetcoSpinTrack from "./pages/SetcoSpinTrack";
import Login from "./pages/Login";
import RegisterHome from "./pages/RegisterHome";
import MainDashboard from "./pages/MainDashboard";
import Order from "./pages/Order";
import NewHistory from "./pages/NewHistory";
import NewDetails from "./pages/NewDetails";
import Thankyou from "./pages/Thankyou";
// import Next from "./pages/Next";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetcoSpinTrack />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterHome />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/new" element={<NewHistory />} />
        <Route path="/newdetails" element={<NewDetails />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
