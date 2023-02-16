export const opacityVariants = {
  visible: {
    opacity: 1,

    transition: { duration: 0.7, delay: 0.1 },
  },
  hidden: { opacity: 0 },
};

export const flyInFromBottom = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 1, delay: 0.2 },
  },
  hidden: { y: 100, opacity: 0 },
};
