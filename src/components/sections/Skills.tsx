"use client";

import SkillIcon from "@/components/SkillIcon";
import { SKILLS } from "@/constants";
import SkillTooltip from "@/components/Tooltip";
import { motion } from "framer-motion";

export default function Skills() {
  const midPoint = Math.ceil(SKILLS.length / 2);
  const firstRowSkills = SKILLS.slice(0, midPoint);
  const secondRowSkills = SKILLS.slice(midPoint);

  const duplicatedFirstRow = [...firstRowSkills, ...firstRowSkills];
  const duplicatedSecondRow = [...secondRowSkills, ...secondRowSkills];

  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-6 py-16"
      aria-labelledby="skills-heading"
    >
      <motion.h2
        id="skills-heading"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-2xl font-semibold text-transparent"
      >
        Skills
      </motion.h2>

      <div className="mt-6 space-y-6">
        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Skills carousel row 1"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -(firstRowSkills.length * 120)]
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            aria-label="Animated skills showcase"
          >
            {duplicatedFirstRow.map((skill, index) => (
              <motion.div
                key={`first-${skill.id}-${index}`}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.name}
                className="flex-shrink-0 overflow-hidden rounded-2xl bg-white/10 shadow-sm backdrop-blur-sm p-6 h-24 w-24 flex items-center justify-center cursor-pointer"
                role="img"
                aria-label={`${skill.name} skill icon`}
                tabIndex={0}
              >
                <SkillIcon src={skill.icon} className="h-full w-full" alt="" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Skills carousel row 2"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            className="flex gap-6"
            animate={{
              x: [-(secondRowSkills.length * 120), 0]
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            aria-label="Animated skills showcase"
          >
            {duplicatedSecondRow.map((skill, index) => (
              <motion.div
                key={`second-${skill.id}-${index}`}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.name}
                className="flex-shrink-0 overflow-hidden rounded-2xl bg-white/10 shadow-sm backdrop-blur-sm p-6 h-24 w-24 flex items-center justify-center cursor-pointer"
                role="img"
                aria-label={`${skill.name} skill icon`}
                tabIndex={0}
              >
                <SkillIcon src={skill.icon} className="h-full w-full" alt="" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Screen reader only list of all skills */}
      <div className="sr-only">
        <h3>Complete list of skills:</h3>
        <ul>
          {SKILLS.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </div>

      <SkillTooltip />
    </section>
  );
}
