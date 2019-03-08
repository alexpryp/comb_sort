"use strict"

//Comb sort
function CombSort(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0, k = i; k < arr.length; j++, k++) {
            if(arr[j] > arr[k]) {
                let temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            }
        }
    }

    return arr;
}

//Test
console.log(CombSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15,]));
