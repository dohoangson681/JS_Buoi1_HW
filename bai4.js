/**
 * tính chu vi diện tích của hình chữ nhật
 * 
 */
/**
 * Sơ đồ mô hình 3 khối
 * Khối 1 : Người dùng nhập vào chiều dài chiều rộng của hình chữ nhật
 * Khối 2 : 
 *      B1 : chương trình lấy chiều dài x chiều rộng rồi gán giá trị đó cho một biến 
 *      B2 : chương trình tính tổng của chiều dài và chiều rộng rồi lấy tổng đó nhân với 2 và gán giá trị cho một biến 
 * Khối 3 : In lần lượt 2 kết quả vừa tính đc ra màn hình
 */
var chieuDai = window.prompt("Nhập vào chiều dài :");
    chieuDai = Number(chieuDai) ;
var chieuRong = window.prompt("Nhập vào chiều rộng :");
    chieuRong = Number(chieuRong) ; 
var chuVi = chieuDai * chieuRong ;
var dienTich = (chieuDai + chieuRong)*2 ;
console.log("Chu Vi là :", chuVi) ;
console.log("Diện Tích là :", dienTich) ;