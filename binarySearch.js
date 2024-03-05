// Binary Search
function binarySearch(arr, target) {
    let mid = Math.floor(arr.length / 2);
    for(let i = 0; i < arr.length; i++){
        if(arr[mid] == target){
            console.log("Target "+target+" found at postion ",mid+1);
            break;
        }
        else if(arr[mid] < target){
            do {
                mid++;
            } while (arr[mid] != target);
            console.log("Target "+target+" found at postion ",mid+1);
            break;
        }
        else{
            do {
                mid--;
            } while (arr[mid] != target);
            console.log("Target "+target+" found at postion ",mid+1);
            break;
        }
    }
}

