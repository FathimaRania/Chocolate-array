let a = [7,4,0,2,3,0,1,0];
let N = a.length;

function moveZerosToEnd(arr) {
    let count= 0;


    for (let i = 0; i < a.length; i++) {
        if (arr[i] !== 0) {
            a[count] = a[i];
            count++; 
        }
    }

    
    for (let i = count; i < a.length; i++) {
        a[i] = 0;
    }

    return a;
}

console.log(moveZerosToEnd(a)); 
