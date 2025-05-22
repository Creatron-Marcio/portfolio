"use client";
import { MY_SKILLS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-20 px-6 md:px-20 flex flex-col items-center justify-center gap-10 bg-black/80"
    >
      <h2 className="text-4xl font-bold text-white text-center">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl z-10">
        {MY_SKILLS.map(({ category, skills }) => (
          <div
            key={category}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/10"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              {category}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="text-base">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute top-0 left-0 z-0 opacity-20">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
