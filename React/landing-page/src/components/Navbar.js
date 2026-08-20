import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-indigo-600"
        : "text-gray-600 hover:text-indigo-500"
    }`;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          My React Site
        </h1>

        <div className="space-x-6">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;