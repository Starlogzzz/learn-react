import {
  ADDCOUNT,
  SUBCOUNT
} from "./constans.js"


export const action1 = num => ({
  type: ADDCOUNT,
  num
})

export const action2 = num => ({
  type: SUBCOUNT,
  num
})


