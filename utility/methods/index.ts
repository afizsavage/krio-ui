export const getFirstCharOf = (word: string | undefined) => {
  return Array.from(word)[0];
};

export const getFirstTwoCharOf = (word: string | undefined) => {
  return `${Array.from(word)[0]}${Array.from(word)[1]}`;
};

export const capitalizeFirstLetter = (streeng: string | undefined) => {
  if (streeng) {
    return streeng.charAt(0).toUpperCase() + streeng.slice(1);
  }
};
