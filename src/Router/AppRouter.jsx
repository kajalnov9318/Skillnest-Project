import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Courses from "../Pages/Courses";
import CourseDetail from "../Pages/CourseDetail";
import Dashboard from "../Pages/Dashboard";
import Admin from "../Pages/Admin";
import NotFound from "../Pages/NotFound";

import MainLayout from "../Layout/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
