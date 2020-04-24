function twoSum(nums, target) {
  let map = {};
  for (let ix = 0; ix < nums.length; ix++) {
    let val = nums[ix];
    if (map[target - val] >= 0) {
      return [map[target - val], ix];
    } else {
      map[val] = ix;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
    */
