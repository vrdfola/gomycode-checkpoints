function insertionsort(arr){
    let key=0
    let j=0
    for(let i=1;i<arr.length;i++){
      key=arr[i]
      j=i-1
      while(j>=0&&arr[j]>key){
        arr[j+1]=arr[j]
        j--
      }
      arr[j+1]=key
    }
    return arr
  }
  console.log(insertionsort([7,4,3,8,1,5]));