function insertSort(newArr) {
	let n = newArr.length;
    
	for (let i = 1; i < n; i++) {
	    //choosing thr first element in our unsorted subarray 
	    let current = newArr[i];
    
	//the last element of out sorted subarray
	    let j = i-1;
		while ((j> -1) && (current < newArr[j])); {
		    newArr[j+1] = newArr[j];
		    j--;
    
	    }
	    newArr [j+1]
	}
	return newArr
    }
    
    let open = [7, 3, 7, 2, 0, 3]
    console.log(insertSort(open))