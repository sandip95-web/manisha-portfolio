import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Social Media Marketing Intern",
    company: "Gripas Marketing",
    date: "2023 - Present",
    responsibilities: [
      "Creating engaging social media content across platforms.",
      "Assisting in planning and executing digital marketing campaigns.",
      "Analyzing social media performance metrics to optimize reach.",
      "Collaborating with the team to enhance brand awareness.",
    ],
  },
  {
    job: "Freelance Content Writer",
    company: "Upwork",
    date: "2022 - Present",
    responsibilities: [
      "Writing clear and persuasive marketing copy for clients.",
      "Researching topics to deliver accurate and engaging content.",
      "Adapting writing style to different audiences and platforms.",
      "Managing multiple projects with timely delivery.",
    ],
  },
  {
    job: "Marketing Intern",
    company: "Westcliff University",
    date: "2021 - 2022",
    responsibilities: [
      "Supported campus marketing activities and social media management.",
      "Helped organize events to promote university programs.",
      "Produced reports on campaign effectiveness.",
      "Gained hands-on experience with marketing tools and strategies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
