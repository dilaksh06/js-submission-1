// 14. Write a function findCommonElements that takes two arrays and returns an array
// containing the common elements between the two.


function findCommonElements(arr1, arr2) {
    var arr3 = [];
    for (i in arr1) {
        //console.log(arr1[i]);
        for (x in arr2) {
            //console.log(arr2[x]);
            if (arr1[i] === arr2[x]) {
                //console.log("yes");
                arr3.push(arr1[i]);
            }

        }
    }
    return arr3;

}
console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]

