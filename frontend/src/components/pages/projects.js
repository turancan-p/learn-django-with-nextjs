import React, { useEffect, useState } from "react";
import ProjectItems from "../cards/projectItems";

const projects_url = "http://127.0.0.1:8000/api/projects/";

const projects = () => {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(projects_url)
      .then((res) => res.json())
      .then((data3) => {
        setProjectData(data3);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!projectData) return <p>No Data</p>;

  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <ProjectItems
              key={project.id}
              name={project.name}
              language={project.language}
              image_url={"http://127.0.0.1:8000/api" + project.project_image}
              info_url={project.info_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
