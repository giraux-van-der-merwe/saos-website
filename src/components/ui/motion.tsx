"use client";

import { motion, type Variants } from "framer-motion";

// ── Shared variants ────────────────────────────────────────────

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ── FadeUp ─────────────────────────────────────────────────────

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function FadeUp({ children, className, delay = 0, as = "div" }: FadeUpProps) {
  const Tag = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Tag>
  );
}

// ── StaggerContainer ───────────────────────────────────────────

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.1,
  staggerDelay = 0.09,
}: StaggerContainerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay, delayChildren },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerItem ────────────────────────────────────────────────

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  withHoverLift?: boolean;
}

export function StaggerItem({ children, className, withHoverLift = false }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      whileHover={withHoverLift ? { y: -3 } : undefined}
      transition={withHoverLift ? { type: "spring", stiffness: 400, damping: 25 } : undefined}
    >
      {children}
    </motion.div>
  );
}

// ── MotionButton ───────────────────────────────────────────────

interface MotionButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionButton({ children, className }: MotionButtonProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
