//bài tính điểm tuyển sinh
function tinhDiem() {
    // Lấy giá trị từ các ô input và select
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var diemToan = parseFloat(document.getElementById("diemToan").value);
    var diemLy = parseFloat(document.getElementById("diemLy").value);
    var diemHoa = parseFloat(document.getElementById("diemHoa").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = parseInt(document.getElementById("doiTuong").value);

    // Tính điểm ưu tiên
    var diemUuTien = 0;
    if (khuVuc == "A") {
      diemUuTien += 2;
    } else if (khuVuc == "B") {
      diemUuTien += 1;
    }else if (khuVuc == "C") {
        diemUuTien += 0.5;
      }

      if (doiTuong == 1) {
        diemUuTien += 2.5;
      } else if (doiTuong == 2) {
        diemUuTien += 1.5;
      } else if (doiTuong == 3) {
        diemUuTien += 1;
      }

      // Tính tổng điểm
      var tongDiem = diemToan + diemLy + diemHoa + diemUuTien;

      // Kiểm tra xem thí sinh đỗ hay rớt
      if (diemToan == 0 || diemLy == 0 || diemHoa == 0) {
          document.getElementById("ketQua").innerHTML = "Thí sinh rớt";
      } else if (tongDiem >= diemChuan) {
          document.getElementById("ketQua").innerHTML = "Thí sinh đỗ với tổng điểm là " + tongDiem.toFixed(2);
      } else {
          document.getElementById("ketQua").innerHTML = "Thí sinh rớt";
      }
  }


  //tính tiền điện
  function tinhTien() {
    var ten = document.getElementById("ten").value;
    var soKw = parseFloat(document.getElementById("soKw").value);
    var tien;
  
    if (soKw <= 50) {
      tien = soKw * 500;
    } else if (soKw <= 100) {
      tien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 150) {
      tien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else {
      tien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
    }
  
    document.getElementById("result").innerHTML = "Tên: " + ten + "<br> Số KW tiêu thụ: " + soKw + "<br> Tiền phải trả: " + tien.toFixed(2) + "đ";
  }


  //tính tiền thuế thu nhập

  function tinhThue() {
    // Lấy thông tin từ form
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = parseInt(document.getElementById("tongThuNhap").value);
    var soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value);

    // Tính thuế
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    var thue = 0;
    if (thuNhapChiuThue > 96000000) {
      thue = (thuNhapChiuThue - 96000000) * 35/100 + 27700000;
    } else if (thuNhapChiuThue > 62400000) {
      thue = (thuNhapChiuThue - 62400000) * 30/100 + 14300000;
    } else if (thuNhapChiuThue > 38400000) {
      thue = (thuNhapChiuThue - 38400000) * 25/100 + 9300000;
    } else if (thuNhapChiuThue > 21000000) {
      thue = (thuNhapChiuThue - 21000000) * 20/100 + 3700000;
    } else if (thuNhapChiuThue > 12000000) {
      thue = (thuNhapChiuThue - 12000000) * 15/100 + 1200000;
    } else if (thuNhapChiuThue > 0) {
      thue = thuNhapChiuThue * 10/100;
    }

    // Hiển thị kết quả
    document.getElementById("kq").innerHTML = hoTen + " phải nộp thuế thu nhập cá nhân là: " + thue.toLocaleString() + " đồng.";
  }

  // tính tiền cap

  function tinhTienCap() {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKetNoi = document.getElementById("soKetNoi").value;
    const soKenhCaoCap = document.getElementById("soKenhCaoCap").value;
  
    let phiXuLyHoaDon, phiDichVuCoBan, phiKenhCaoCap;
  
    if (loaiKhachHang === "A") {
      phiXuLyHoaDon = 4.5;
      phiDichVuCoBan = 20.5;
      phiKenhCaoCap = 7.5;
    } else {
      phiXuLyHoaDon = 15;
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
      phiKenhCaoCap = 50;
    }
  
    const tongPhi = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap * soKenhCaoCap;
  
    const divHoaDon = document.getElementById("bill");
    divHoaDon.innerHTML = `Hóa đơn của khách hàng là: ${tongPhi}$.`;
  }