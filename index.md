<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
<!--     <title>Class 2 Assignment</title> -->
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
<!--     <script src="index.js"></script> -->
  </body>
</html>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
}

input {
  margin: 10px;
}

.main {
  margin: 25px;
}

.calc {
  margin: 25px;
}

#btn,
#btn1,
#btn2,
#btn3,
#btn4,
#btn5,
#btn6,
#btn7 {
  padding: 5px 10px;
}

#result,
#result1,
#result2,
#result3,
#result4,
#result5,
#result6,
#result7 {
  border: 1px solid forestgreen;
  width: 7.5%;
  text-align: center;
  margin: 25px 0;
}
</style>

