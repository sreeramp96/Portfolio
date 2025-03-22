export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Task Manager App",
      description:
        "A full-stack app to create, read, update, and delete tasks.",
      tech: ["React", "Django", "PostgreSQL"],
      link: "#",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "An e-commerce platform with user authentication and payment integration.",
      tech: ["Laravel", "MySQL", "React"],
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills.",
      tech: ["React", "TailwindCSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-teal-500 text-black px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
