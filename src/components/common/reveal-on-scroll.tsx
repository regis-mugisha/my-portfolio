import { motion } from "motion/react";
import type { PropsWithChildren } from "react";

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

type RevealOnScrollProps = PropsWithChildren<{
  id?: string;
  className: string;
}>;

const RevealOnScroll = ({ children, id, className }: RevealOnScrollProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
};

export default RevealOnScroll;
