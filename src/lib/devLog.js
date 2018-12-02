export const devLog = (input, ...others) => {
  if (process.env.NODE_ENV === 'development') console.log(input, ...others)

  return input
}
