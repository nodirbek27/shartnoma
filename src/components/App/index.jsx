import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SuperadminDashboard from "../../pages/SuperadminDashboard";
import Analitika from "../../pages/SuperadminDashboard/Analitika";
import Adminlar from "../../pages/SuperadminDashboard/Adminlar";
import Talabalar from "../../pages/SuperadminDashboard/Talabalar";
import ShartnomaOlganlar from "../../pages/SuperadminDashboard/ShartnomaOlganlar";

import AdminDashboard from "../../pages/AdminDashboard";
import UserDashboard from "../../pages/UserDashboard";
import LoginPage from "../../pages/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage";

const App = () => {
  const isAuthenticated = true;
  // const role = "superadmin";
  // const role = "admin";
  const role = "user";

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/superadmin"
          element={
            isAuthenticated && role === "superadmin" ? (
              <SuperadminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="analitika" element={<Analitika />} />
          <Route path="adminlar" element={<Adminlar />} />
          <Route path="talabalar" element={<Talabalar />} />
          <Route path="shartnoma-olganlar" element={<ShartnomaOlganlar />} />
          <Route path="" element={<Navigate to="/superadmin/analitika" />} />
        </Route>
        <Route
          path="/admin"
          element={
            isAuthenticated && role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="analitika" element={<Analitika />} />
          <Route path="talabalar" element={<Talabalar />} />
          <Route path="shartnoma-olganlar" element={<ShartnomaOlganlar />} />
          <Route path="" element={<Navigate to="/admin/analitika" />} />
        </Route>
        <Route
          path="/user"
          element={
            isAuthenticated && role === "user" ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
