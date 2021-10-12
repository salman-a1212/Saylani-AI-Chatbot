<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Class 2 Assignment</title>
  </head>

  <body>
    <div class="main">
      <div class="calc">
        <h1>Class 2 Assignment</h1>
        <h2>Addition</h2>
        Some Number: <input type="number" id="num1" />
        <br />
        Some Number: <input type="number" id="num2" />
        <br />
        <button id="btn">Add</button>
        <br />
        <h1 id="result"></h1>
      </div>
      <div class="calc">
        <h2>Subtraction</h2>
        Some Number: <input type="number" id="num3" />
        <br />
        Some Number: <input type="number" id="num4" />
        <br />
        <button id="btn1">Subtract</button>
        <br />
        <h1 id="result1"></h1>
      </div>
      <div class="calc">
        <h2>Multiplication</h2>
        Some Number: <input type="number" id="num5" />
        <br />
        Some Number: <input type="number" id="num6" />
        <br />
        <button id="btn2">Multiply</button>
        <br />
        <h1 id="result2"></h1>
      </div>
      <div class="calc">
        <h2>Division</h2>
        Some Number: <input type="number" id="num7" />
        <br />
        Some Number: <input type="number" id="num8" />
        <br />
        <button id="btn3">Divide</button>
        <br />
        <h1 id="result3"></h1>
      </div>
      <div class="calc">
        <h2>Remainder</h2>
        Some Number: <input type="number" id="num9" />
        <br />
        Some Number: <input type="number" id="num10" />
        <br />
        <button id="btn4">Remainder</button>
        <br />
        <h1 id="result4"></h1>
      </div>
      <div class="calc">
        <h2>Increment</h2>
        Some Number: <input type="number" id="num11" />
        <br />
        <button id="btn5">Increment</button>
        <br />
        <h1 id="result5"></h1>
      </div>
      <div class="calc">
        <h2>Decrement</h2>
        Some Number: <input type="number" id="num12" />
        <br />
        <button id="btn6">Decrement</button>
        <br />
        <h1 id="result6"></h1>
      </div>
      <div class="calc">
        <h2>Exponentiation</h2>
        Some Number: <input type="number" id="num13" />
        <br />
        <button id="btn7">Exponentiate</button>
        <br />
        <h1 id="result7"></h1>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>

<!-- indoc css -->
<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
}

.text {
  background-color: #232644;
  margin: 50px;
  padding: 50px;
}

.text p,
h1 {
  color: #fff;
}

.text h1 {
  margin-top: 50px;
  font-size: 3rem;
}

.pic {
  width: 12%;
}

.img-con {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 50px;
  border-bottom: 1px solid;
  line-height: 1.5;
}

.summ-text {
  margin: 50px;
}

.skill-sec {
  margin: 50px;
}

.skill-sec h2 {
  border-bottom: 1px solid;
  line-height: 1.5;
  margin: 20px 0;
}

.list {
  padding: 0 50px;
  margin: 0 25px;
}

.row {
  display: flex;
}

.col {
  flex: 50%;
}

.exp-sec {
  margin: 50px;
}

.exp-sec h2 {
  border-bottom: 1px solid;
  line-height: 1.5;
  margin: 20px 0;
}

.edu-sec {
  margin: 50px;
}

.edu-sec h2 {
  border-bottom: 1px solid;
  line-height: 1.5;
  margin: 20px 0;
}

.cert-sec {
  margin: 50px;
}

.cert-sec h2 {
  border-bottom: 1px solid;
  line-height: 1.5;
  margin: 20px 0;
}

.text a {
  color: #fff;
  display: block;
}
</style>

<!-- indoc JS -->
<script>
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

</script>
