function hasTargetSum(array, target) {
  for (let i = 0; i !== array.length;) {
    let searchNum = target - array[i]
    array.shift()
    let findNum = array.find(num2 => num2 === searchNum)
    
    if (findNum === searchNum) {
      return true
    } else if(array.length === 0) {
      return false
    }
  }
}

/* 
  Write the Big O time complexity of your function here
    array.shift() = O(1)
    array.find() = O(log n) * for()
*/

/* 
  Add your pseudocode here
    -function will find two numbers whose sum will equal the desired number.
    -function will reverse engineer the desired sum with a given number of an array.
    -function will then search for the reverse engineered number to recreate desired sum.
*/

/*
  Add written explanation of your solution here
    1. We create a loop that only takes the first number of the newly filterd array and subtracts it from the target to get the number we are looking for while also taking it out of the array to make sure its not finding itself as a solution later.
    2. We use the find() method to make an attempt to locate desired number.
    3. If the number matches we return true. Otherwise we continue the loop until the array is emptied of possibilities and returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

}

module.exports = hasTargetSum;
