function insertPosition(nums: number[], target: number): number {
  return insertRecursion(nums, target, 0, nums.length - 1)
}

function insertRecursion(nums: number[], target: number, left: number, right: number): number {
  let mid = left + Math.floor((right - left) / 2)
  if (left > right) {
    return left
  }
  if (nums[mid] === target) {
    return mid
  } else if (nums[mid] > target) {
    return insertRecursion(nums, target, 0, mid - 1)
  } else if (nums[mid] < target) {
    return insertRecursion(nums, target, mid + 1, right)
  }
  return nums.length
}
console.log(insertPosition([1, 3, 5, 6], 2));

