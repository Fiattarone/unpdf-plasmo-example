import { extractText } from "unpdf"

export const add = (a = 0, b = 2) => a + b

export const testFunc = () => {
  // using extract text
  const result = extractText("any URL")
  console.log(result)
}
