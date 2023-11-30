//bài1
function sortAndDisplay() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
   
  if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
     document.getElementById("result").innerHTML = "Đầu vao không hợp lệ! Vui lòng chỉ nhập số.";
  }
  else {
     var numbers = [num1, num2, num3];
     numbers.sort(function(a, b){return a-b});
     
     document.getElementById("result").innerHTML = "Các số theo thứ tự tăng dần là: " + numbers;
  }
 }
 document.getElementById("btn-bai1").onclick = sortAndDisplay;

//  bài2

function greet() {
  var name = document.getElementById("name").value;
  var message = "";

  if (name == "Ba" || name == "B") {
      message = "Chào Ba! hôm nay Ba khoẻ không =))";
  } else if (name == "Me" || name == "M") {
      message = "Chào Mẹ! hôm nay Mẹ khoẻ không =))";
  } else if (name == "anhTrai" || name == "A") {
      message = "Chào Anh Trai! hôm nay Anh trai khoẻ không =))";
  } else if (name == "emGai" || name == "E") {
      message = "Chào Em Gái! hôm nay Em gái khoẻ không =))";
  } else {
      message = "Nhập Sai! Vui Lòng Nhập Lại";
  }

  document.getElementById("result-1").innerHTML = message;
}
document.getElementById("btn-bai2").onclick = greet;

// bài3
function countEvenOdd() {
  var num1 = document.getElementById("num-1").value;
  var num2 = document.getElementById("num-2").value;
  var num3 = document.getElementById("num-3").value;
   
  var evenCount = 0;
  var oddCount = 0;
   
  if (num1 % 2 == 0) {
     evenCount++;
  } else {
     oddCount++;
  }
   
  if (num2 % 2 == 0) {
     evenCount++;
  } else {
     oddCount++;
  }
   
  if (num3 % 2 == 0) {
     evenCount++;
  } else {
     oddCount++;
  }
   
  document.getElementById("result-2").innerHTML = "Số Lẻ là: " + oddCount + "<br>Số Chẵn là: " + evenCount;
}
document.getElementById("btn-bai3").onclick = countEvenOdd;

//bài4
function checkTriangle() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  if (a === "" || b === "" || c === "") {
    document.getElementById("result-3").innerHTML =  "Ba cạnh của tam giác không được để trống";
    return ;
 }
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  if (a <= 0 || b <= 0 || c <= 0) {
    document.getElementById("result-3").innerHTML ="Đầu vào không hợp lệ. Các cạnh của một tam giác phải dương.";
    return;
  }
  else if (a + b <= c || a + c <= b || b + c <= a) {
     document.getElementById("result-3").innerHTML = "Các cạnh đầu vào không tạo thành hình tam giác";
  }
  else if (a === b && b === c) {
     document.getElementById("result-3").innerHTML = "Tam giác là tam giác đều";
  }
  else if (a === b || a === c || b === c) {
     document.getElementById("result-3").innerHTML = "Tam giác cân";
  }
  else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
     document.getElementById("result-3").innerHTML = "Tam giác vuông góc (Pythagore)";
  }
  else {
     document.getElementById("result-3").innerHTML = "Tam giác bình thường";
  }
 }
 document.getElementById("btn-bai4").onclick = checkTriangle;