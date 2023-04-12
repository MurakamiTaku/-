const hintBtn = document.getElementById("hintBtn");
const checkBtn = document.getElementById("checkBtn");
const answerInput = document.getElementById("answer");
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

checkBtn.addEventListener("click", function () {
  const answer = answerInput.value.toLowerCase();

  if (answer === "さん") {
    go.innerText =
      "正解! 正方形を90度ずつ回転しながらデジタル数字を足すと33になります。";
  } else {
    go.innerText = "不正解!";
  }
});
