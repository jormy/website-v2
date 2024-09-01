"use client";

import ProjectCard from "@/app/projects/projectCard/ProjectCard";
import { benzin } from "@/utils/fonts";
import { projects } from "@/utils/projects";
import { motion as m } from "framer-motion";

function Projects() {
  return (
    <>
      <div className="space-y-10">
        <div className="space-y-6">
          <h1
            className={`${benzin.className} text-7xl font-bold text-denim-200`}
          >
            projects
          </h1>
          <p className="text-xl">some things that i've worked on so far </p>
        </div>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard
                key={index}
                name={project.name}
                descr={project.descr}
                img={project.img}
                link={project.link}
                repo={project.repo}
              />
            </m.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
