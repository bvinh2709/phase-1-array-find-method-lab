// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "W"},
  //...
]
function superbowlWin(array) {
const isWin = array.find(element => element.result === "W")
  if (isWin) {
    const yearWin = isWin.year
    console.log(yearWin)
    return yearWin
  }
  else {
    return undefined
  }
}
superbowlWin(record)