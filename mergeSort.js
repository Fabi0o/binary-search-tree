const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const firstHalf = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const secondHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return mergeSortedArrs(firstHalf, secondHalf);
};

const mergeSortedArrs = (arr1, arr2, result = []) => {
  if (!arr1.length && !arr2.length) return result;
  else if (!arr1.length) result.push(arr2.shift());
  else if (!arr2.length) result.push(arr1.shift());
  else if (arr1[0] == arr2[0]) {
    result.push(arr1.shift());
    arr2.shift();
  } else
    arr1[0] > arr2[0] ? result.push(arr2.shift()) : result.push(arr1.shift());

  return mergeSortedArrs(arr1, arr2, result);
};

export default mergeSort;
