import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import NotificationSettings from "./pages/NotificationSettings/Notification"
import UpdatePersonalInfo from "./pages/Info/Info"
import ScheduleAppointment from "./pages/Appointement/Appointement"
import DonationHistory from "./pages/History/History"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Blood Donor */}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notification-settings" element={<NotificationSettings />} />
        <Route path="/update-personal-info" element={<UpdatePersonalInfo />} />
        <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
        <Route path="/donation-history" element={<DonationHistory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
