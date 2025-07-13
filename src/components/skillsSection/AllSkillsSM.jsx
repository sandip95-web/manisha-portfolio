import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BiPencil } from "react-icons/bi";
import { RiShareForwardLine, RiTeamLine } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

const skills = [
  {
    skill: "Content Writing & Copywriting",
    icon: BiPencil,
  },
  {
    skill: "Social Media Strategy",
    icon: RiShareForwardLine,
  },
  {
    skill: "Graphic & Visual Design",
    icon: FaPaintBrush,
  },
  {
    skill: "Performance Analysis",
    icon: HiOutlineChartBar,
  },
  {
    skill: "Communication & Collaboration",
    icon: RiTeamLine,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
