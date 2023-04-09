const GetUrl=document.getElementsByClassName("js-myURL_1");
const GetImg=document.getElementsByClassName("js-myURL_2");
const GetText=document.getElementsByClassName("js-myText");
const OutPut=document.getElementById("js-output");
const OutPre=document.getElementById("js-preview");
//DOMが読み込んだ後に発火
window.addEventListener('DOMContentLoaded', ()=> {
  const waku=document.getElementsByClassName("waku");
  const jsobi=document.getElementsByClassName("js-obi");
  const box_mu=document.getElementsByClassName("box_mu");
  
  //ユーザーが変更を加えたときに発火
  window.addEventListener("change", ()=> {
    Preview();
})
})

//追加ボタンが押された時(画像)
function AddImage() {
  const addBoxes=document.createElement("li");
  addBoxes.className="waku";
  addBoxes.innerHTML="<div class=\"row box_mu\">"+"<input class=\"js-myURL_1\" value=\"\" type=\"text\" placeholder=\"リンク先\" style=\"width: 35%;\">"+"<input class=\"js-myURL_2\" value=\"\" type=\"text\" placeholder=\"画像URL\" style=\"width: 35%;\">"+"<button type= \"button\" class=\"js-btn\" onclick=\"btnUp(this)\">↑</button>"+"<button type= \"button\" class=\"js-btn\" onclick=\"btnDown(this)\">↓</button>"+"<button type= \"button\" class=\"js-btn\" onclick=\"btnRemove(this)\">✕</button>"+"</li>";
  document.querySelector("ul#js-custom").appendChild(addBoxes);
}


//追加ボタンが押された時（テキスト）
function AddText() {
  let addBoxes=document.createElement("li");
  addBoxes.className="waku";
  addBoxes.innerHTML="<div class=\"row box_mu\">"+"<input class=\"js-myText\"  value=\"\" type=\"text\" placeholder=\"テキスト\" style=\"width: 70%;\">"+"<button type= \"button\" class=\"js-btn\" onclick=\"btnUp(this)\">↑</button>"+"<button type= \"button\" class=\"js-btn\" onclick=\"btnDown(this)\">↓</button>"+"<button type= \"button\" class=\"js-btn\" onclick=\"btnRemove(this)\">✕</button>"+"</li>";
  document.querySelector("ul#js-custom").appendChild(addBoxes);
}


// btnUp関数: 上の行と入れ替える
function btnUp(btn) {
  const currentLi=btn.closest('li');
  const prevLi=currentLi.previousElementSibling;
  if (prevLi) {
    currentLi.parentNode.insertBefore(currentLi, prevLi);
    Preview();
  }
}

// btnDown関数: 下の行と入れ替える
function btnDown(btn) {
  const currentLi=btn.closest('li');
  const nextLi=currentLi.nextElementSibling;
  if (nextLi) {
    currentLi.parentNode.insertBefore(nextLi, currentLi);
    Preview();
  }
}

// btnRemove関数: 自身を含むliを削除する
function btnRemove(btn) {
  const li=btn.closest('li');
  li.remove();
  Preview();
 
}

function Preview() {
  let html = ""; // 初期化
  const elements = document.querySelectorAll('.js-myURL_1, .js-myURL_2, .js-myText'); // 要素を配列に変換する
  const elementsArray = Array.from(elements);

  // elementsArrayが空でない場合にのみループを実行する
  if (elementsArray.length > 0) {
    for (let i = 0; i < elementsArray.length; i++) {
      const myUrlValue = elementsArray[i].value;
      const myUrlValue2 = elementsArray[i + 1] ? elementsArray[i + 1].value : '';
      const className = elementsArray[i].classList;
      console.log(className);
      if (className == ('js-myURL_1')) {
        html += "<a href=\"" + myUrlValue + "\">" + "<img src=\"" + myUrlValue2 + "\" width=\"100%\">" + "</a>"; // HTMLを生成して追加
      }
      else if (className == ('js-myText')) {
        html += "<p>" + myUrlValue + "</p>"; // HTMLを生成して追加
      }
    }
  }

  OutPre.innerHTML = html; // 生成したHTMLを表示
}


// ボタンがクリックされた時の処理
function htmlPut() {
  let html=""; // 初期化
  OutPut.innerHTML = OutPre.innerHTML;
}

// ページを閉じる際にWebストレージにHTMLの状態を保存
window.addEventListener('beforeunload', function() {
  // HTMLの状態を取得
  var htmlState = document.documentElement.outerHTML;
  // Webストレージに保存
  localStorage.setItem('htmlState', htmlState);
});

// ページを開いた際にWebストレージからHTMLの状態を読み込む
window.addEventListener('load', function() {
  // WebストレージからHTMLの状態を取得
  var htmlState = localStorage.getItem('htmlState');
  // HTMLの状態を更新
  if (htmlState) {
    document.documentElement.outerHTML = htmlState;
  }
});
