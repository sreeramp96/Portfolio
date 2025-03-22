export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center p-4">
      <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
      <div className="mt-2">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 mx-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 mx-2"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
