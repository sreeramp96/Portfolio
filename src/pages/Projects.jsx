export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Flood Monitoring System",
      description:
        "Created a real-time flood monitoring and early warning system using computer vision and Python.Designed a system to record and analyze water level changes using OpenCV.Established an efficient information channel for flood-related updates.Enhanced authorities' abilities in search and rescue and implemented an early warning mechanism.",
      tech: [
        "Python 3.7+",
        "OpenCV 4.0+",
        "numpy",
        "scipy",
        "matplotlib",
        "scikit learn",
      ],
      link: "https://github.com/sreeramp96/Flood-Monitoring-System",
    },
    {
      id: 2,
      title: "Workopia",
      description:
        "A job platform with user authentication to post and apply for jobs.Job Listing CRUD. Authentication & Authorization Policies. Profile Avatar Upload. Blade UI Components. Vite & Tailwind Integration. Bookmarking System. Apply & Upload Resume. User Dashboard. Alpine.js For Interactivity. Database Seeder. Job Search. Job Listing Pagination",
      tech: ["Laravel", "MySQL", "TailwindCSS"],
      link: "http://140.245.241.137/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills.",
      tech: ["React", "TailwindCSS"],
      link: "https://portfolio-six-pi-73.vercel.app/",
    },
  ];

  return (
    <section id="projects" className=" text-white py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
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
