import React from "react";

type TechTool = {
  name: string;
  color: string;
};

type ProjectData = {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: TechTool[];
  tools: TechTool[];
  github: string;
  demo: string;
};

const colors = {
  primary: "#ff8c00",
  secondary: "#000000",
  text: "#000000",
  background: "#ffffff",
};

const projectsData: ProjectData[] = [
  {
    id: "a",
    title: "ContentMatrix",
    description:
      "A place where you can get content for any kind of work.",
    features: [
      'Developed a platform for generating diverse content such as YouTube blogs and articles using the Gemini API, enabling users to quickly produce tailored multimedia content.',
      "Beautiful minimalist design, with 3 themes you can choose from",
      "Utilized Next.js for efficient routing, drizzle for database interaction, and neon-DB for data storage. Integrated Tailwind-CSS for a responsive design, enhancing user experience.",
      "Gained advanced skills in using Gemini API for automated content generation, improved content workflow efficiency, and honed expertise in building web apps with modern technologies.",
    ],
    tech: [
      { name: "Next.js", color: colors.primary },
      { name: "drizzle", color: colors.primary },
      { name: "neon-DB", color: colors.primary },
      { name: "Tailwind CSS", color: colors.primary },
      { name: "Clerk", color: colors.primary },
    ],
    tools: [{ name: "Gemini API", color: colors.primary }],
    github: "https://github.com/SHARJIDH/ContentMatrix",
    demo: "https://content-matrix-sharjidhs-projects.vercel.app/",
  },
  {
    id: "b",
    title: "Document and BlockBuilder Platform",
    description:
      "A roadmap and docs platform for your projects.",
    features: [
      "Developed a platform enabling users to create and edit documents, design blockbuilders (e.g., flowcharts), and collaborate in real-time.",
      "Focused on interactive UX and streamlined workflows for efficient project management and documentation.",
      "Leveraged Next.js for seamless routing, Convex for real-time data synchronization, and Tailwind CSS for responsive design.",
      "Integrated Canvas API for dynamic drawing and blockbuilding features, enhancing visual representation of project roadmaps.",
      "Enhanced proficiency in Next.js and Canvas API, improved state management with Convex, and deepened expertise in building collaborative tools.",
    ],
    tech: [
      { name: "Next.js", color: colors.primary },
      { name: "Convex", color: colors.primary },
      { name: "Tailwind CSS", color: colors.primary },
      { name: "TypeScript", color: colors.primary },
      { name: "React", color: colors.primary },
    ],
    tools: [
      { name: "Canvas API", color: colors.primary },
      { name: "Clerk", color: colors.primary },
      { name: "Vercel", color: colors.primary },
      { name: "Liveblocks", color: colors.primary },
      { name: "Zustand", color: colors.primary },
    ],
    github: "https://github.com/SHARJIDH/BlockBuider",
    demo: "https://block-buider.vercel.app/",
  },
  {
    id: "c",
    title: "Social Media App",
    description: "A feature-rich social media platform for group communication and collaboration.",
    features: [
      "Developed a social media app for creating servers, chatting, and sharing information in groups",
      "Implemented secure user authentication and authorization using Clerk",
      "Leveraged Next.js for server-side rendering and SEO optimization",
      "Utilized Stream Chat for real-time messaging functionality",
      "Integrated Stream Video for audio channels and video calling capabilities",
      "Created an intuitive user interface for seamless navigation and interaction",
      "Implemented responsive design for optimal user experience across devices",
    ],
    tech: [
      { name: "Next.js", color: colors.primary },
      { name: "React", color: colors.primary },
      { name: "TypeScript", color: colors.primary },
      { name: "Tailwind CSS", color: colors.primary },
    ],
    tools: [
      { name: "Clerk", color: colors.primary },
      { name: "Stream Chat", color: colors.primary },
      { name: "Stream Video", color: colors.primary },
      { name: "Vercel", color: colors.primary },
    ],
    github: "https://github.com/SHARJIDH/SocialAir",
    demo: "https://social-air.vercel.app",
  },
];

const TechToolList: React.FC<{ items: TechTool[]; label: string }> = ({
  items,
  label,
}) => (
  <p className="text-black text-xs sm:text-sm">
    {label}:{" "}
    {items.map((item, index) => (
      <span key={index} style={{ color: item.color }}>
        {item.name}
        {index < items.length - 1 ? ", " : ""}
      </span>
    ))}
  </p>
);

const Button: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <a
    target="_blank"
    href={`${link}`}
    className=" cursor-pointer p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm"
  >
    {text}
  </a>
);

interface ProjectDetailsProps {
  projectId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
        {project.title}
      </h2>
      <p className="text-sm sm:text-base">{project.description}</p>
      <ul className="list-disc list-inside space-y-1 sm:space-y-2.5 text-sm sm:text-base">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <TechToolList items={project.tech} label="Tech used" />
      <TechToolList items={project.tools} label="Tools used" />
      <div className="flex gap-3 sm:gap-5 items-center">
        <Button text="View Demo" link={project.demo} />
        <Button text="Source Code" link={project.github} />
      </div>
    </div>
  );
};

export default ProjectDetails;
