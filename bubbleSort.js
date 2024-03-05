const arr = [1206,4256,3212,6758,9112,2367,1134,3010,6252,8295];

function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
                if(arr[i] < arr[j]){
                    arr[i] = arr[i + 1]
                    arr[j] = arr[j + 1];
                }
                
        }
        console.log(arr)  
    }
}

bubbleSort(arr)
