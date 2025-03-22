export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-900"
    >
      <h1 className="text-5xl font-bold text-teal-400 mb-4">
        Hi, I'm Sreeram P 👋
      </h1>
      <p className="text-lg text-gray-300 max-w-md text-center">
        Experienced Software Engineer with 5.5 years of experience in developing
        web applications, focusing on backend, frontend, and full-stack
        development using PHP, MySQL, and JavaScript. Skilled at solving complex
        problems, improving performance, and ensuring high-quality code through
        debugging, testing, and optimization.
        <span className="text-teal-400"> React</span> and{" "}
        <span className="text-teal-400">Django</span>.
      </p>
      <button className="mt-6 px-6 py-3 bg-teal-400 text-black rounded-full shadow-lg hover:bg-teal-500">
        View My Work
      </button>
    </section>
  );
}
