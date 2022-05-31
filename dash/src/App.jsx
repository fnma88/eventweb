// import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import TicketCRUD from "./pages/TicketCRUD";
import UserCRUD from "./pages/UserCRUD";
import EventCRUD from "./pages/EventCRUD";
import OrderCRUD from "./pages/OrderCRUD";
import EditTicket from "./pages/EditTicket";
import EditUser from "./pages/EditUser";
import EditEvent from "./pages/EditEvent";
import Statistics from "./pages/Statistics";
import EditOrder from "./pages/EditOrder";
import UserCreate from "./pages/UserCreate";
import TicketCreate from "./pages/TicketCreate";
import EventCreate from "./pages/EventCreate";

function App() {
  const loggedUser = useSelector((state) => state.user);

  return (
    <div className="app">
      {loggedUser ? (
        <Routes>
          {/* login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* pages */}
          <Route path="/tickets" element={<TicketCRUD />} />
          <Route path="/usuarios" element={<UserCRUD />} />
          <Route path="/events" element={<EventCRUD />} />
          <Route path="/ordenes" element={<OrderCRUD />} />
          <Route path="/estadisticas" element={<Statistics />} />
          {/* edit pages */}
          <Route path="/tickets/:id" element={<EditTicket />} />
          <Route path="/usuarios/:username" element={<EditUser />} />
          <Route path="/events/:name" element={<EditEvent />} />
          <Route path="/ordenes/:id" element={<EditOrder />} />
          {/* create pages */}
          <Route path="/usuarios/nuevo" element={<UserCreate />} />
          <Route path="/tickets/nuevo" element={<TicketCreate />} />
          <Route path="/events/nuevo" element={<EventCreate />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
