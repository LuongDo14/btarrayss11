//1 khai bao mang 2 chieu
let arrInt = [];
//2 nhap gia tri cac phan tu
for (i= 0 ; i< 3 ; i++){
    let arrRow=[];
    for (j = 0 ; j<3;j ++){
        arrRow.push(+prompt("Nhap gia tri cua mang" +(j+1) + "Nhap dong cua mang" + (i+1)));
    }
    arrInt.push(arrRow)
}
//3 in gia tri cac phan tu
console.log("khai bao" ,arrInt)
 for (let i = 0; i < arrInt.length; i++) {
            for (let j = 0; j < arrInt[i].length; j++) {
                document.write(arrInt[i][j] + " ");
            }
            document.write("<br>");
        }
 //4. In giá trị phần tử trên đường biên
 console.log("Các giá trị nằm trên đường biên:");
 for (let i = 0; i < arrInt.length; i++) {
     for (let j = 0; j < arrInt[i].length; j++) {
         if (i == 0 || j == 0 || i == arrInt.length - 1 || j == arrInt[i].length - 1) {
             console.log(arrInt[i][j]);
         }
     }
 }
 //5. In giá trị các phần tử trên chéo chính và phụ
 if (arrInt.length == arrInt[0].length) {
     //Số dòng == số cột -> ma trận vuông
     console.log("Các phần tử nằm trên đường chéo chính:");
     for (let i = 0; i < arrInt.length; i++) {
         for (let j = 0; j < arrInt[i].length; j++) {
             if (i == j) {
                 console.log(arrInt[i][j]);
             }
         }
     }
     console.log("Các phần tử nằm trên đường chéo phụ:");
     for (let i = 0; i < arrInt.length; i++) {
         for (let j = 0; j < arrInt[i].length; j++) {
             if (i + j == arrInt.length - 1) {
                 console.log(arrInt[i][j]);
             }
         }
     }
 }
 //6. Sắp xếp mảng tăng dần theo dòng
 //Duyệt từng dòng để sắp xếp tăng dần
 for (let i = 0; i < arrInt.length; i++) {
     //Duyệt dòng i - duyệt mảng 1 chiều arrInt[i] - sắp xếp mảng 1 chiều arrInt[i]
     // arrInt[i].sort((a, b) => a - b); //Dùng sort
     for (let j = 0; j < arrInt[i].length - 1; j++) {
         for (let k = j + 1; k < arrInt[i].length; k++) {
             if (arrInt[i][j] > arrInt[i][k]) {
                 let temp = arrInt[i][j];
                 arrInt[i][j] = arrInt[i][k];
                 arrInt[i][k] = temp;
             }
         }
     }
 }
 console.log("Mảng sau khi sắp xếp các dòng tăng dần:", arrInt);