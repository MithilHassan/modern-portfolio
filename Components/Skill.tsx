import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill as SkillType } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out p-3 overflow-hidden"
      >
        <Image
          src={urlFor(skill.image).url()}
          width={"100%"}
          height={"100%"}
          alt=""
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
}
