// a. Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt 
// và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá 
// trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”
let arr = [];
let sum = 0
do {
    let value = prompt("Nhập vào một giá trị:");
    if (value == "" || isNaN(value) || value == null) {
        //kết thúc nhập
        break;
    } else {
        //Thêm giá trị vào mảng arrInt
        arr.push(+value);
    }
} while (true);
console.log("Mảng sau khi nhập:", arr);
for (i = 0; i < arr.length; i++) {
    sum += i
}
console.log("Tổng các giá trị của mảng", sum)


let max = arr[0];
let min = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Phần tử có giá trị max  là: " + max);
console.log("Phần tử có giá trị min  là: " + min);

sorted = arr.sort((a, b) => a - b);
console.log("MAX :", sorted[sorted.length - 1]);



reve = arr.reverse((a, b) => a - b);
console.log("MiN :", reve[reve.length - 1]);
