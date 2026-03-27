import { useEffect, useState } from "react";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://skillnest-backend-s8vx.onrender.com/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <h3>Enrolled Courses</h3>

      <div className="course-list">
        {courses.map((c) => (
          <div key={c._id} className="card">
            {c.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
