btn.onclick = function myfunction() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = Number(num1) + Number(num2);
  console.log("result: ", result);
  document.getElementById("result").innerText = result;
};
