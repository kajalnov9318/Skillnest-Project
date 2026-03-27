import { useEffect, useState } from "react";
import "../Styles/admin.css";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // GET COURSES
  const loadCourses = () => {
    fetch("https://skillnest-backend-scy6.onrender.com/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // ADD COURSE
  const addCourse = async () => {
    await fetch("https://skillnest-backend-scy6.onrender.com/api/courses/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    });

    setTitle("");
    setDescription("");
    setPrice("");

    loadCourses();
  };

  // DELETE
  const deleteCourse = async (id) => {
    await fetch(
      `https://skillnest-backend-scy6.onrender.com/api/courses/${id}`,
      {
        method: "DELETE",
      },
    );

    loadCourses();
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>

      <div className="add">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addCourse}>Add Course</button>
      </div>

      <div className="admin-list">
        {courses.map((c) => (
          <div key={c._id} className="admin-card">
            <span>{c.title}</span>

            <button onClick={() => deleteCourse(c._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
