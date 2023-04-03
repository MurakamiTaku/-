const hintBtn = document.getElementById("hintBtn");
const checkBtn = document.getElementById("checkBtn");
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");

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
    result.innerText = "正解!時計回りでデジタル数字を足すと33になります。";
  } else {
    result.innerText = "不正解!";
  }
});
