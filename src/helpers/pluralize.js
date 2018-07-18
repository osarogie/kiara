export const pluralize = (words, count) =>
  `${words[0]}${count.length === 1 ? '' : 's'}`
