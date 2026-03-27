import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>SkillNest</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
