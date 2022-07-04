/**
 * Viết chương trình tính lương nhân viên
 * Lương một ngày bằng 100k
 * Người dùng nhập vào số ngày làm
 * Lương = 100k x Số Ngày Làm
 */
/**
 * Sơ đồ mô hình 3 khối
 * Khối một : Người dùng nhập vào số ngày làm
 * Khối hai : Chương trình lấy số ngày làm x 100.000 để tính lương
 * Khối ba  : In kết quả đó ra màn hình
 */
var soNgayLam = window.prompt("Nhập vào số ngày làm việc :") ;
soNgayLam = Number(soNgayLam) ; 
var tienLuong = soNgayLam * 100000 ; 
console.log("Tiền Lương Của Nhân Viên : " , tienLuong) ;

