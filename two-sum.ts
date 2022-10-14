var twoSum = function(nums: number[], target: number): number[] | undefined {  
  for (let i = 0; i < nums.length; i++) {
      let check = target + (-1 * nums[i]);
      
      if (nums.indexOf(check) !== -1 && nums.indexOf(check) !== i) {
          return i < nums.indexOf(check) ? [i, nums.indexOf(check)] : [nums.indexOf(check), i]
      }
  }
};