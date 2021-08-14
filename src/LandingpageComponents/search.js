function searchL(q, data, section) {
  let ans = [];
  if (q === "") {
    return ans;
  }
  q = q.toLowerCase();
  let k = q.length;
  for (let i = 0; i < data.length; i++) {
    let subarray = [];
    let arr = data[i][section];
    // let bool=false
    for (let j = 0; j < arr.length; j++) {
      subarray.push(arr[j]);
      if (j >= k - 1) {
        let f = subarray.join("").toLowerCase();
        if (q === f) {
          ans.push(arr);
          break;
        }
        subarray.shift();
      }
    }
  }
  return ans;
}

function showResults(q,data,section){
  let ans = [];
  if (q === "") {
    return ans;
  }
  q = q.toLowerCase();
  let k = q.length;
  for (let i = 0; i < data.length; i++) {
    let subarray = [];
    let arr = data[i][section];
    // let bool=false
    for (let j = 0; j < arr.length; j++) {
      subarray.push(arr[j]);
      if (j >= k - 1) {
        let f = subarray.join("").toLowerCase();
        if (q === f) {
          ans.push(data[i]);
          break;
        }
        subarray.shift();
      }
    }
  }
  return ans;
}

export {
  searchL, showResults
};
//Bengaluru • Remote possible
