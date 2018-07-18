export const devLog = (input, ...others) => {
  if (process.env === 'development') console.log(input, ...others)

  return input
}
