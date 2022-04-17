import { Link } from "react-router-dom";

export const NavbAr = () => {
  return (
    <div className="navbbr">
      <Link to="/">Home</Link>
      <Link to="/add_teacher">Add Teacher</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
