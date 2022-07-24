//https://leetcode.cn/problems/binary-search/
function findTarget(nums, target) {
    // return findRecursion(nums, target, 0, nums.length - 1);
    return whileFind(nums, target);
}
function findRecursion(nums, target, left, right) {
    if (left > right)
        return -1;
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target)
        return mid;
    else if (nums[mid] > target) {
        return findRecursion(nums, target, left, mid - 1);
    }
    else if (nums[mid] < target) {
        return findRecursion(nums, target, left + 1, right);
    }
}
function whileFind(nums, target) {
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(findTarget([-1, 0, 3, 5, 9, 12], 9));
