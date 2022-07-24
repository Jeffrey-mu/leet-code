function findTarget(nums: number[], target: number): number {
  return findRecursion(nums, target, 0, nums.length - 1);
  // return whileFind(nums, target)
}
function findRecursion(nums: number[], target: number, left: number, right: number): number {
  if (left > right) return -1
  let mid = left + Math.floor((right - left) / 2)
  if (nums[mid] === target) return mid
  else if (nums[mid] > target) {
    return findRecursion(nums, target, left, mid - 1)
  } else if (nums[mid] < target) {
    return findRecursion(nums, target, left + 1, right)
  }
}


function whileFind(nums: number[], target: number): number {
  let left = 0, reight = nums.length - 1, mid = Math.floor(reight + left) / 2
  while (left < reight) {
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid - 1
    } else if (nums[mid] > target) {
      reight = mid + 1
    }
    return -1
  }
}
console.log(findTarget([1, 2, 3], 5));
