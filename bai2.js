/**
 * Tính giá trị trung bình của 5 số
 */
/**
 * Sơ đồ mô hình 3 khối
 * Khối 1 : Người dùng nhập vào 5 số tùy ý
 * Khối 2 : 
 *      B1: Tính tổng của 5 số và lưu vào một biến 
 *      B2: Lấy biến đó chia cho 5 và gán kết quả cho 
 *          một biến
 * Khối 3 : In kết quả ra màn hình
 */
var num1 = window.prompt("Nhập vào số thứ 1 : ") ;
var num2 = window.prompt("Nhập vào số thứ 2 : ") ;
var num3 = window.prompt("Nhập vào số thứ 3 : ") ;
var num4 = window.prompt("Nhập vào số thứ 4 : ") ;
var num5 = window.prompt("Nhập vào số thứ 5 : ") ;
// tạo một biến tính tổng 

var sum = Number(num1) + Number(num2)  + Number(num3)  + Number(num4)  + Number(num5)  ; 
// tính trung bình 
var tB = sum / 5  ;
console.log("Giá trị trung bình là : " , tB) ; 