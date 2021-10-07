// Addition
btn.onclick = function myfunction() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = Number(num1) + Number(num2);
  console.log("result: ", result);
  document.getElementById("result").innerText = result;
};

// Subtraction
btn1.onclick = function myfunction1() {
  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById("num4").value;

  let result1 = Number(num3) - Number(num4);
  console.log("result1: ", result1);
  document.getElementById("result1").innerText = result1;
};

// Multiplication
btn2.onclick = function myfunction1() {
  let num5 = document.getElementById("num5").value;
  let num6 = document.getElementById("num6").value;

  let result2 = Number(num5) * Number(num6);
  console.log("result2: ", result2);
  document.getElementById("result2").innerText = result2;
};
