function findTarget(nums, target) {
    return findRecursion(nums, target, 0, nums.length - 1);
    // return whileFind(nums, target)
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
    var left = 0, reight = nums.length - 1, mid = Math.floor(reight + left) / 2;
    while (left < reight) {
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid - 1;
        }
        else if (nums[mid] > target) {
            reight = mid + 1;
        }
        return -1;
    }
}
console.log(findTarget([1, 2, 3], 5));
