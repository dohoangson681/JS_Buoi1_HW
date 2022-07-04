/**
 * Viết chương trình nhập vào một số có 2 chữ số và tính tổng các kí số
 */
/**
 * Mô hình 3 Khối
 * Khối 1 : Người dùng nhập vào một số có 2 chữ số
 * Khối 2 : 
 *      B1 : Đầu tiền ta lấy số đó chia dư cho 10
 *          để tách chữ số cuối cùng ra và lưu 
 *          chữ số cuối cùng đó vào một biến
 *      B2 : Lấy số đó chia cho 10 
 *      B3 : Dùng hàm Math.Floor() làm tròn 
 *           xuống để lấy chữ số thứ 2 và lưu 
 *           giá trị số thứ 2 vào một biến
 *      B4 : Tính tổng 2 số vừa tách ra 
 * Khối 3 : In tổng vừa tính được ra màn hình
 */
var number = window.prompt("Nhập vào 1 số có 2 chữ số : ") ; 
    number = Number(number) ; 
var soThu1 = number % 10 ; 
    number /= 10 ; 
var soThu2 = Math.floor(number) ; 
var sum = soThu1 + soThu2 ; 
console.log("Tổng hai kí số : " , sum) ; 