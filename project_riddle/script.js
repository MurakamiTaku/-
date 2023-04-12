const hintBtn = document.getElementById("hintBtn");
const answerBtn = document.getElementById("answerBtn");
const checkBtn = document.getElementById("checkBtn");
const answerInput = document.getElementById("answerBox");
const result = document.getElementById("result");
const go = document.getElementById("go");

hintBtn1.addEventListener("click", function () {
  result1.innerText = "時計の針=回転する";
});
hintBtn2.addEventListener("click", function () {
  result2.innerText = "デジタルの数字も見てみよう";
});
hintBtn3.addEventListener("click", function () {
  result3.innerText =
    "時計回り、または反時計回りに回転させてデジタル数字を足していくと、、、";
});

answerBtn.addEventListener("click", function () {
  go.innerText =
  "33が正解なので さん と入力すると正解になります。\n" +
  "正方形を90度ずつ回転しながらデジタル数字を足すと33になります。";
});

checkBtn.addEventListener("click", function () {

console.log(answerInput.value);
  if (answerInput.value == "さん") {
    go.innerText =
      "正解! 正方形を90度ずつ回転しながらデジタル数字を足すと33になります。";
  } else if(answerInput.value == ""){
    go.innerText = "入力されていません。入力してください。";
  }else{
    go.innerText = "不正解!";
  }
});
