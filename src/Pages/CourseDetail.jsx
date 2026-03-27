import { useParams } from "react-router-dom";
import "../Styles/courseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="detail">
      <h1>Course Detail</h1>

      <h2>Course ID: {id}</h2>

      <p>This is course description. You can enroll in this course.</p>

      <button className="enroll">Enroll Now</button>
    </div>
  );
};

export default CourseDetail;
