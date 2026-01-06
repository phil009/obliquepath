// Enhanced motion variants for more sophisticated animations
export const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  },
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  },
}

export const floatingAnimation = {
  initial: {},
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
}

export const pulseAnimation = {
  initial: {},
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
}

export const rotateAnimation = {
  initial: {},
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 60,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
}
