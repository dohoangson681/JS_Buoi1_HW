/**
 * Giá 1 USD đổi sang tiền Việt Nam là 23.500đ
 * Viết chương trình qui đổi từ tiền USD sang tiền
 * Việt Nam
 */
/**
 * Sơ đồ mô hình 3 khối
 * Khối 1 : Người dùng nhập vào số lượng tiền đơn vị là USD
 * Khối 2 : Chương trình lấy số tiền người dùng nhập vào nhân 
 * với 23500 và gán giá trị đó cho một biến
 * Khối 3 : In giá trị đó ra màn hình
 */
var tienUS = window.prompt("Nhập vào tiền USD : ") ;
// đổi sang tiền Việt 
var tienViet = Number(tienUS) * 23500 ; 
console.log('Tiền Việt tương ứng là :' , tienViet) ; 