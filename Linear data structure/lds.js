
// Instructions
// Problem 1, Solution 1 with an array.
// Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add 
// that element to sum. Then do the vice versa to add elements from the second set. 
// Problem 1, Solution 2 with an hash table.
// Insert all the elements from both the sets with the element as key and its count (in both arrays).
// Now iterate through the constructed map and sum all the elements with count = 1.
// Problem 2, same approaches with little modifications.


//Initialize variable
let set1 = [3, 1, 7, 9]; // 7, 2, 4
let set2 = [2, 4, 1, 9, 3];
let sum = 0;

//Comparing two elements then adding it to a sum 
for (var i in set1) {
	if(!set2.includes(set1[i])) sum+=(set1[i]);
    }
    
    for (var i in set1) {
	if(!set1.includes(set2[i])) sum+=(set2[i]);
    }
    //return the sum
    console.log(sum);
    





// Problem 1 Solution 2
function sumDistinctArray2(arr1, arr2) {
	// initialize sum
	let sum = 0;
    
	// initialize store object
	let store = {};
    
	// loop through arr1
	for(let i=0; i<arr1.length; i++) {
	    if(store[arr1[i]]) {
	    store[arr1[i]] += 1;
	} else {
	    store[arr1[i]] = 1;
	}
	}
	// add all elements in arr1 to object with its count as key-value pair
    
	// loop through arr2
	// add all elements in arr2 to object with its count as key-value pair
	for(let i=0; i<arr2.length; i++) {
	    if(store[arr2[i]]) {
	    store[arr2[i]] += 1;
	} else {
	    store[arr2[i]] = 1;
	}
    }
	// sum all elements with count of 1
	store = Object.entries(store).filter(([key, value]) => {
	return value === 1
    })
    
	store = store.map(number => Number(number[0]));
    
	store = store.reduce((a,b) => a + b)
    
	return store;
    
	return sum
    }
    
    console.log(sumDistinctArray2([3,1,7,9], [2,4,1,9,3]))
    
    
    
    //Problem 2 solution
	function sumofOverlappingElement(arr1, arr2){
    
	    //initialize map
	    let hash = new Map();
    
     //  i. find overlapping elements by looping through both arrays 
	    for (let i = 0; i < arr1.length; i++){
		if (!hash.has(arr1[i])){
		    hash.set(arr1[i], 1)
		} else{
		    hash.set(arr1[i], hash.get (arr1[i]) + 1 );
		}
		
	    }
    
	    
	    for (let i = 0; i < arr2.length; i++){
		if (!hash.has(arr2[i])){
		    hash.set(arr2[i], 1)
		} else{
		    hash.set(arr2[i], hash.get (arr2[i]) + 1 );
		}
		
	    }
      // ii. sum the overlapping elements 
    
	let sum = 0;
	    for(let [key, value] of hash.entries())
	    {
		if(value > 1)
		{
		    sum += key * 2;
		}
	    }
	 // iii. return sum of overlapping elements
	    return sum;
    }
    
    
	console.log(sumofOverlappingElement([12, 13, 6, 10], [13, 10, 16, 15]))