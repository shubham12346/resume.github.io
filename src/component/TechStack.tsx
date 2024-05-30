import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri";

const TechStack = () => {
  return (
    <div className="pt-20  pb-40 flex justify-center items-center borderBottom">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="py-4 px-4">
          <RiJavascriptLine className="h-36 w-36" />
        </div>
        <div className="py-4 px-4">
          <FaReact className="h-32 w-32" />
        </div>
        <div className="py-4 px-4">
          <FaNodeJs className="h-28 w-28" />
        </div>
        <div className="py-4 px-4">
          <SiTypescript className="h-28 w-28" />
        </div>
        <div className="py-4 px-4 mb-10">
          <RiTailwindCssFill className="h-28 w-28" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
