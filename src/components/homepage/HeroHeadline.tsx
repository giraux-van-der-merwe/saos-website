"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function HeroHeadline() {
  return (
    <motion.h1
      className="order-1 lg:order-2 font-heading text-4xl font-bold text-evergreen sm:text-5xl lg:pl-10"
      style={{ lineHeight: 1.1, paddingTop: "calc(1rem + 2px)" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={lineVariants} className="block">
        Park your rig.
      </motion.span>
      {/* hero-catch-line: CSS hides this at (max-width: 1023px) AND (max-height: 835px) */}
      <motion.span variants={lineVariants} className="hero-catch-line hidden lg:inline">
        Catch your flight.<br />
      </motion.span>
      <motion.span variants={lineVariants} className="text-cinnamon block">
        Come back ready to roll.
      </motion.span>
    </motion.h1>
  );
}
