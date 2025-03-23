export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-white"
    >
      <h1 className="text-5xl font-bold text-teal-400 mb-4">
        Hi, I'm Sreeram P{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <p className="text-lg text-gray-300 max-w-md text-center">
        Experienced Software Engineer with 5.5 years of experience in developing
        web applications, focusing on backend, frontend, and full-stack
        development using PHP, MySQL, and JavaScript. Skilled at solving complex
        problems, improving performance, and ensuring high-quality code through
        debugging, testing, and optimization.
      </p>
    </section>
  );
}
