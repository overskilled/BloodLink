import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import NotificationSettings from "./pages/NotificationSettings/Notification"
import UpdatePersonalInfo from "./pages/Info/Info"
import ScheduleAppointment from "./pages/Appointement/Appointement"
import DonationHistory from "./pages/History/History"
import BloodBankDashboard from "./pages/BloodBankDashboard/Dashboard"
import BloodStockManagement from "./pages/BloodBankDashboard/BloodStockManagement"
import TrackingBloodRequests from "./pages/BloodBankDashboard/TrackingBloodRequest"
import CertifyingDonors from "./pages/BloodBankDashboard/CertifyingDonor"
import SendingNotificationsToDonors from "./pages/BloodBankDashboard/SendingNotificationsToDonors"
import CoordinationWithHospitals from "./pages/BloodBankDashboard/CoordinationWithHospitals"
import CollaborationWithBloodBanks from "./pages/BloodBankDashboard/CollaborationWithBloodBanks"
import EditingDonorInformation from "./pages/BloodBankDashboard/EditingDonorInformation"

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

        {/* Bloodbank */}
        <Route path="/blood-bank-dashboard" element={<BloodBankDashboard />} />
        <Route path="/blood-stock-management" element={<BloodStockManagement />} />
        <Route path="/tracking-blood-requests" element={<TrackingBloodRequests />} />
        <Route path="/certifying-donors" element={<CertifyingDonors />} />
        <Route path="/sending-notifications-to-donors" element={<SendingNotificationsToDonors />} />
        <Route path="/coordination-with-hospitals" element={<CoordinationWithHospitals />} />
        <Route path="/collaboration-with-blood-banks" element={<CollaborationWithBloodBanks />} />
        <Route path="/editing-donor-information" element={<EditingDonorInformation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
