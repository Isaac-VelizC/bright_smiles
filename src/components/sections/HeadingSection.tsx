import { motion } from "framer-motion";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  content?: string;
};

const HeadingSection: React.FC<Props> = ({ title, subtitle, content }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 pb-2">
      <div className="w-full md:w-2/4 text-center heading-section">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-sm block mb-2 uppercase relative tracking-[2px]"
        >
          {title}
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6 md:text-4xl tracking-wider text-[28px]"
        >
          {subtitle}
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-sm font-normal leading-relaxed text-gray-500 tracking-wide"
        >
          {content && content}
        </motion.p>
      </div>
    </div>
  );
};

export default HeadingSection;
