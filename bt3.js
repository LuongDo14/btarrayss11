//a. Thêm phần tử “Rock-n-Roll” vào cuối mảng
let styles = [("Jazz"),("Blues")];
styles.push("Rock-n-Roll");
//b. Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng có tổng số phần tử là l
console.log(styles)
if (styles.length % 2 !==0){
    styles[1] = ("Classics");
}
console.log(styles)
//c. Xóa phần tử đầu tiên của mảng và hiển thị mảng
let del = styles.shift();


console.log(styles)
console.log(del)

//d. Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
let addst = styles.unshift();

console.log(styles)
console.log(addst)
