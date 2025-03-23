import React from "react";

const About = () => {
  return (
    <section id="about" className="text-white py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-6">
          Hey! I'm <span className="text-teal-400">[Your Name]</span>, a
          passionate full-stack developer with
          <span className="text-teal-400"> 5 years of experience</span> in
          building web applications.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          I specialize in{" "}
          <span className="text-teal-400">
            React, Django, Laravel, and PostgreSQL
          </span>
          . I love solving complex problems and creating scalable, user-friendly
          applications.
        </p>
        <p className="text-lg text-gray-300">
          When I'm not coding, you'll find me watching movies, playing games, or
          learning new tech.
        </p>
      </div>
    </section>
  );
};

export default About;
