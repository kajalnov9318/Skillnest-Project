import { useEffect, useState } from "react";
import "../Styles/courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch("https://skillnest-backend-s8vx.onrender.com/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const enroll = async (courseId) => {
    await fetch(
      "https://skillnest-backend-s8vx.onrender.com/api/users/enroll",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          courseId,
        }),
      },
    );

    alert("Enrolled");
  };

  return (
    <div className="courses">
      <h1>Courses</h1>

      <div className="course-list">
        {courses.map((c) => (
          <div key={c._id} className="card">
            <h3>{c.title}</h3>

            <p>{c.description}</p>

            <button onClick={() => enroll(c._id)}>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
