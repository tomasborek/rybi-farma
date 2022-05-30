import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { inViewVariants } from "../utils/variants";
//Utils
inViewVariants;
const MotionDiv = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView();
  return (
    <motion.section
      ref={ref}
      variants={inViewVariants}
      initial="hidden"
      animate={inView && "visible"}
      className="my-8"
    >
      {children}
    </motion.section>
  );
};

export default MotionDiv;
