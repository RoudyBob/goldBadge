function filterNumbersFromArray(arr) {
    let regex = /^[0-9]*$/;
    let newArr = [];

    for (i = 0; i < arr.length; i++) {
        console.log(`Array Value: ${arr[i]}`);
        console.log(`Regex Number Test: ${regex.test(arr[i])}`);
        console.log(`Typeof: ${typeof arr[i]}`);
        if (typeof arr[i] != "number") {
            arr.splice(arr[i],1);
        } else {
            console.log(arr[i]);
        }
    };
  }
  
  var arr = [1, 'a', 'b', 2];
  console.log(`before: ${arr}`);
  console.log()
  filterNumbersFromArray(arr);

for (var i = 0; i < arr.length; i++)
  console.log(arr[i]);
