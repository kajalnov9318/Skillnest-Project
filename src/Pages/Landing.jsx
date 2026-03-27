import { Link } from "react-router-dom";
import "../Styles/landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Learn New Skills with SkillNest</h1>

        <p>Discover short courses and workshops to boost your career.</p>

        <div className="buttons">
          <Link to="/courses">
            <button className="btn">Explore Courses</button>
          </Link>

          <Link to="/login">
            <button className="btn outline">Login</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
