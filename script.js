const hintBtn = document.getElementById("hintBtn");
const checkBtn = document.getElementById("checkBtn");
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");
const go = document.getElementById("go");

hintBtn1.addEventListener("click", function () {
  result1.innerText = "時計は何回り？";
});
hintBtn2.addEventListener("click", function () {
  result2.innerText = "デジタルの数字も見てみよう";
});
hintBtn3.addEventListener("click", function () {
  result3.innerText = "時計回りにデジタル数字を足していくと、、、";
});

checkBtn.addEventListener("click", function () {
  const answer = answerInput.value.toLowerCase();

  if (answer === "さん") {
    go.innerText = "正解!時計回りでデジタル数字を足すと33になります。";
  } else {
    go.innerText = "不正解!";
  }
});
