import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
    return (
        <div className="flex flex-col gap-32 md:gap-48 w-full">
            {projects.map((project: ProjectProps, index: number) => (
                <ProjectCard
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    technologies={project.technologies}
                    techNames={project.techNames}
                    techLinks={project.techLinks}
                    github={project.github}
                    demo={project.demo}
                    images={project.images}
                    available={project.available}
                    index={index}
                />
            ))}
        </div>
    );
};

export default ProjectGrid;
