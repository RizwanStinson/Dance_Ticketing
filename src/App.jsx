import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClassManagement from "./components/ClassManagement";
import DanceTickets from "./components/DanceTickets";
import LoginForm from "./components/LoginForm";
import SingleEvent from "./components/Single-Event";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import CancelPage from "./pages/PaymentCancelPage";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<DanceTickets />} />
          <Route path="/admin" element={<LoginForm />} />
          <Route path="/class/:id" element={<SingleEvent />} />
          <Route path="/manage" element={<ClassManagement />} />
          <Route path="/success" element={<PaymentSuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
