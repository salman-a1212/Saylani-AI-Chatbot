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
btn2.onclick = function myfunction2() {
  let num5 = document.getElementById("num5").value;
  let num6 = document.getElementById("num6").value;

  let result2 = Number(num5) * Number(num6);
  console.log("result2: ", result2);
  document.getElementById("result2").innerText = result2;
};

// Division
btn3.onclick = function myfunction3() {
  let num7 = document.getElementById("num7").value;
  let num8 = document.getElementById("num8").value;

  let result3 = Number(num7).toFixed(2) / Number(num8).toFixed(2);
  console.log("result3: ", result3);
  document.getElementById("result3").innerText = result3;
};

// Remainder
btn4.onclick = function myfunction4() {
  let num9 = document.getElementById("num9").value;
  let num10 = document.getElementById("num10").value;

  let result4 = Number(num9).toFixed(2) % Number(num10).toFixed(2);
  console.log("result4: ", result4);
  document.getElementById("result4").innerText = result4;
};

// Increment
btn5.onclick = function myfunction5() {
  let num11 = document.getElementById("num11").value;

  let result5 = ++num11;
  console.log("result5: ", result5);
  document.getElementById("result5").innerText = result5;
};

// Decrement
btn6.onclick = function myfunction6() {
  let num12 = document.getElementById("num12").value;

  let result6 = --num12;
  console.log("result6: ", result6);
  document.getElementById("result6").innerText = result6;
};

// Exponentiation
btn7.onclick = function myfunction7() {
  let num13 = document.getElementById("num13").value;

  let result7 = Math.pow(num13, 2);
  console.log("result7: ", result7);
  document.getElementById("result7").innerText = result7;
};

// firebase deployment
<script type='module'>
  import {initializeApp} from
  "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js"; const
  firebaseConfig ={" "}
  {{
    apiKey: "AIzaSyDIakS6xmS1w3aeYLu4kY4cLc1QUnlQgiM",
    authDomain: "ai-class-assignment.firebaseapp.com",
    projectId: "ai-class-assignment",
    storageBucket: "ai-class-assignment.appspot.com",
    messagingSenderId: "74126091405",
    appId: "1:74126091405:web:93866501bbd9d730e7eec4",
  }}
  ; const app = initializeApp(firebaseConfig);
</script>;
