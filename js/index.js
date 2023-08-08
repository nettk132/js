function myFunction(){
    alert("Hello csmju");
    console.log("Hello javascript");
    console.log("Hello monday");
   console.log(document.getElementById("headder1").innerText= "Hello csmju");
    document.getElementById("headder1").innerHTML= "change........";
    document.getElementById("headder1").style.color= "#ff0000";   

var x=8;
var y=20;
var z=3;
result=(x+y+z)/3
document.getElementById("headder2").innerHTML = result.toFixed(2);
}


var fontSize = 16; // ขนาดตัวอักษรเริ่มต้น
var intervalId; // ตัวแปรเก็บ ID ของ interval ที่ใช้ในการเรียกใช้ฟังก์ชัน

// เพิ่ม event listener ให้กับ element ที่มี id="reuse"
document.getElementById("reuse").addEventListener("click", toggleLike);

function likeFunction() {
 
  fontSize++; // เพิ่มขนาดตัวอักษรขึ้นทีละ 1

  document.getElementById("reuse").style.fontSize = fontSize + "px"; // กำหนดขนาดตัวอักษรใหม่ใน CSS
}

function toggleLike() {
  if (!intervalId) {
    // หากยังไม่มีการเรียกใช้งานฟังก์ชันเพิ่มค่า i ให้เริ่มทำงาน interval
    intervalId = setInterval(likeFunction, 1000); // เรียกใช้ฟังก์ชันทุก 1000 มิลลิวินาที (หนึ่งวินาที)
  } else {
    // หากมีการเรียกใช้งานฟังก์ชันเพิ่มค่า i อยู่แล้วให้หยุด interval และ reset ค่า i เป็น 0
    clearInterval(intervalId);
    intervalId = null;
   
    fontSize = 16; // รีเซ็ตขนาดตัวอักษรเป็นค่าเริ่มต้น
    
    document.getElementById("reuse").style.fontSize = fontSize + "px"; // กำหนดขนาดตัวอักษรใหม่ใน CSS
  }
}


 // เริ่มต้น i ที่ 0
var fontSize = 16; // ขนาดตัวอักษรเริ่มต้น
var intervalId; // ตัวแปรเก็บ ID ของ interval ที่ใช้ในการเรียกใช้ฟังก์ชัน

// เพิ่ม event listener ให้กับ element ที่มี id="reuse"
document.getElementById("reuse").addEventListener("click", toggleLike);

function loveFunction() {
   // เพิ่มค่า i ขึ้นทีละ 10
 
  fontSize += 5; // เพิ่มขนาดตัวอักษรขึ้นทีละ 10
  document.getElementById("reuse").style.fontSize = fontSize + "px"; // กำหนดขนาดตัวอักษรใหม่ใน CSS
}

function toggleLike() {
  if (!intervalId) {
    // หากยังไม่มีการเรียกใช้งานฟังก์ชันเพิ่มค่า i ให้เริ่มทำงาน interval
    intervalId = setInterval(loveFunction, 1000); // เรียกใช้ฟังก์ชันทุก 1000 มิลลิวินาที (หนึ่งวินาที)
  } else {
    // หากมีการเรียกใช้งานฟังก์ชันเพิ่มค่า i อยู่แล้วให้หยุด interval และ reset ค่า i เป็น 0
    clearInterval(intervalId);
    intervalId = null;
 
  
    fontSize = 16; // รีเซ็ตขนาดตัวอักษรเป็นค่าเริ่มต้น
    document.getElementById("reuse").style.fontSize = fontSize + "px"; // กำหนดขนาดตัวอักษรใหม่ใน CSS
  }
}

function sadFunction() {
  fontSize += (-10); // เพิ่มขนาดตัวอักษรขึ้นทีละ 10
  document.getElementById("reuse").style.fontSize = fontSize + "px"; // กำหนดขนาดตัวอักษรใหม่ใน CSS

  // เช็คเงื่อนไขในการเปลี่ยนแปลง FontAwesome ตามค่า fontSize
  if (fontSize < -20) {
    document.getElementById("reuse").classList.add("fa fa-frown-o");
  } else {
    document.getElementById("reuse").classList.remove("fa fa-heart");
  }
}

function toggleLike() {
  if (!intervalId) {
    intervalId = setInterval(loveFunction, 1000); // เรียกใช้ฟังก์ชันทุก 1000 มิลลิวินาที (หนึ่งวินาที)
  } else {
    clearInterval(intervalId);
    intervalId = null;

    fontSize = 16; // รีเซ็ตขนาดตัวอักษรเป็นค่าเริ่มต้น
    document.getElementById("reuse").style.fontSize = fontSize + "px"; // กำหนดขนาดตัวอักษรใหม่ใน CSS
  
  }
}
