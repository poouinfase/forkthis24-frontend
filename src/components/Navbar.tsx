import Link from "next/link";
import "../styles/globals.css";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="logo-placeholder">Logo</div>
          <Link
            href="/about"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            href="/leaderboard"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700"
          >
            Leaderboard
          </Link>
        </div>
        <div>
          <Link
            href="/resources"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700"
          >
            Resources
          </Link>
          <Link
            href="/resources"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
