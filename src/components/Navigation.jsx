import { useNavigate, NavLink } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    // For example: localStorage.removeItem('authToken');
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav>
      {/* NavLink automatically adds "active" class when the route matches */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>

      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Posts
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navigation;
