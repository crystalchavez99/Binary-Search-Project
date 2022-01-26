function binarySearch(array, target) {
    if (!array.length) {
        return false;
    }
    let mid = Math.floor(array.length / 2);

    let left = array.splice(0, mid);
    let right = array.slice(mid + 1);

    if (target < array[mid]) {
        return binarySearch(left, target)
    } else if (target > array[mid]) {
        return binarySearch(right, target)
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    let low = 0;
    let high = array.length - 1;
    // While high and low indices do not overlap...
  while (low <= high) {

    // Find the midpoint between high and low indices
    let mid = Math.floor((high + low) / 2);

    // Compare the target value to the midpoint value
    if (target === array[mid]) return mid;
    // If the target equals the midpoint...
    // Return the midpoint index
    if (target > array[mid]){
      low = mid + 1;
    }
    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    if (target < array[mid]) high = mid - 1;
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1

  }
  return -1;
}


module.exports = {
    binarySearch,
    binarySearchIndex
};
