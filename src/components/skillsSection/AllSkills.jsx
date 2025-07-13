import SingleSkill from "./SingleSkill";
import { FaPaintBrush, } from "react-icons/fa";
import { RiShareForwardLine,  RiTeamLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BiPencil } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";

const skills = [
  {
    skill: "Content Writing & Copywriting",
    icon: BiPencil,
  },
  {
    skill: "Social Media Strategy",
    icon: RiShareForwardLine ,
  },
  {
    skill: "Graphic & Visual Design",
    icon: FaPaintBrush,
  },
  {
    skill: "Performance Analysis",
    icon: HiOutlineChartBar ,
  },
  {
    skill: "Communication & Collaboration",
    icon: RiTeamLine ,
  },
  
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center  relative gap-8 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
