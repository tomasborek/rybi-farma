//Create framer motion variants for visible and hidden
export const inViewVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.75,
    },
  },
};
