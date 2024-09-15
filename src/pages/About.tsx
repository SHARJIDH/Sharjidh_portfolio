function About() {
  return (
    <div className="flex bg-gray-100 h-screen w-screen justify-center items-center">
      <div className="max-w-screen-md px-6 md:p-0">
        <h1 className="text-4xl font-bold mb-8 text-[#ff8c00]">
          Hi there! I'm Sharjidh
        </h1>
        <p className="text-lg text-gray-600">
          I'm a passionate full-stack developer with expertise in modern web technologies. My focus is on creating innovative and efficient solutions using cutting-edge tools and frameworks. I specialize in Next.js, React, TypeScript, and Tailwind CSS for frontend development, while leveraging powerful backend technologies like Convex and neon-DB.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          I'm particularly interested in building collaborative platforms and content generation tools. My recent projects include a content generation platform using the Gemini API, a document and blockbuilder platform for project management, and a feature-rich social media application.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          I'm always eager to learn and adapt to new technologies, constantly improving my skills in areas like real-time data synchronization, API integration, and responsive design. If you're interested in collaborating or want to know more about my work, feel free to check out my{" "}
          <a
            className="cursor-pointer text-[#ff8c00]"
            target="_blank"
            href="https://github.com/SHARJIDH"
          >
            GitHub
          </a>{" "}
          or connect with me on{" "}
          <a
            className="cursor-pointer text-[#ff8c00]"
            target="_blank"
            href="https://www.linkedin.com/in/shaik-sharjidh-51500122b/"
          >
            LinkedIn
          </a>.
        </p>
      </div>
    </div>
  );
}

export default About;
