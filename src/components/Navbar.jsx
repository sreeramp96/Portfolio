import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-teal-400"
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-teal-400"
        >
          Projects
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-teal-400"
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-teal-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
