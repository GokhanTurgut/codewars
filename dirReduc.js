function dirReduc(arr) {
  function helper(dirArr) {
    for (let i = 0; i < dirArr.length; i++) {
      if (dirArr[i] === "NORTH") {
        if (dirArr[i + 1] === "SOUTH")
          return dirArr.filter((dir, index) => {
            if (index !== i && index !== i + 1) return dir;
          });
      } else if (dirArr[i] === "SOUTH") {
        if (dirArr[i + 1] === "NORTH")
          return dirArr.filter((dir, index) => {
            if (index !== i && index !== i + 1) return dir;
          });
      } else if (dirArr[i] === "WEST") {
        if (dirArr[i + 1] === "EAST")
          return dirArr.filter((dir, index) => {
            if (index !== i && index !== i + 1) return dir;
          });
      } else if (dirArr[i] === "EAST") {
        if (dirArr[i + 1] === "WEST")
          return dirArr.filter((dir, index) => {
            if (index !== i && index !== i + 1) return dir;
          });
      }
    }
    changed = false;
    return dirArr;
  }
  let changed = true;
  while (changed) {
    arr = helper(arr);
  }
  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
