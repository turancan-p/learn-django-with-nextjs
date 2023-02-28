import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiRefreshCcw } from "react-icons/fi";

const skills_url = "http://127.0.0.1:8000/api/skills/";
const types_url = "http://127.0.0.1:8000/api/types/";

const skills = () => {
  const [skillData, setSkillData] = useState(null);
  const [typeData, setTypeData] = useState(null);

  const handleSkills = () => {
    const fecthData = async () => {
      const skillsResults = await axios(skills_url);
      const typesResults = await axios(types_url);

      setSkillData(skillsResults.data);
      setTypeData(typesResults.data);
    };
    fecthData();
  };

  useEffect(() => {
    handleSkills();
  }, []);

  if (!skillData) return <p>Waiting Data...</p>;

  return (
    <div id="skills" className="w-full lg:h-screen p-2 py-16">
      <div className="max-w-[1240px] p-4 mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillData.map((skill) => (
            <div
              key={skill.id}
              className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-col-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    alt="/"
                    src={`http://127.0.0.1:8000/api${skill.skill_image}`}
                    width="64px"
                    height="64px"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.skill_name}</h3>
                  <p className="py-2 text-xs tracking-widest uppercase text-gray-600">
                    {typeData[skill.type_name - 1].name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default skills;
