"use strict";
// 1行目に記載している 'use strict' は削除しないでください
// 厳格モード(曖昧な実装をエラーにしてくれる)

console.log("川柳ミキサーへようこそ！");
console.log("どんな川柳ができあがるか楽しみですね！");
console.log("おもしろい川柳がでたらCopyボタンをクリックしてシェアしましょう！");
console.log(database);

// アクセス用の変数を用意
let updateCountValue = 1;
const updateCounter = document.getElementById("updateCounter");

/**
 * カウンターを増やす
 */
function incrementCounter() {
  updateCountValue++;
  updateCounter.innerText = "第 " + String(updateCountValue) + " 句";
}

/**
 * @param {number} max
 * @returns {number} 0からmax-1までのランダム整数を返す
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * @param {number} num
 * @param {string} text
 */
function changeText(num, text) {
  const target = document.body.querySelector("#content" + num);
  if (target !== null) {
    target.textContent = text;
  }
  // console.log(target.textContent);
}

/**
 * @returns {Array} チェックボックスで選択されているジャンルの川柳データを返す
 */
function getSenryu() {
  let arr = [];
  const inputs = document.querySelectorAll(".genreSelector");
  for (const check of inputs) {
    if (check.checked) {
      if (check.id === "check-sara") {
        arr = arr.concat(database["sara"]);
      } else if (check.id === "check-silver") {
        arr = arr.concat(database["silver"]);
      } else if (check.id === "check-kurashi") {
        arr = arr.concat(database["kurashi"]);
      }
    }
  }
  // console.log("getSenryu: ", arr);
  return arr;
}

// mixボタンクリック
const btnMix = document.getElementById("btn-mix");
btnMix.addEventListener("click", () => {
  const senryuData = getSenryu();
  if (senryuData.length === 0) {
    window.alert("川柳ジャンルを選択してください");
    return;
  }
  changeText(0, senryuData[getRandomInt(senryuData.length)][0]);
  changeText(1, senryuData[getRandomInt(senryuData.length)][1]);
  changeText(2, senryuData[getRandomInt(senryuData.length)][2]);
  incrementCounter();
});

// originボタンクリック
const btnOrigin = document.getElementById("btn-origin");
btnOrigin.addEventListener("click", () => {
  const senryuData = getSenryu();
  if (senryuData.length === 0) {
    window.alert("川柳ジャンルを選択してください");
    return;
  }
  const index = getRandomInt(senryuData.length);
  changeText(0, senryuData[index][0]);
  changeText(1, senryuData[index][1]);
  changeText(2, senryuData[index][2]);
  incrementCounter();
});

// copyボタンをクリック
const btnCopy = document.getElementById("btn-copy");
btnCopy.addEventListener("click", () => {
  const first = document.body.querySelector("#content0").innerText;
  const second = document.body.querySelector("#content1").innerText;
  const third = document.body.querySelector("#content2").innerText;
  navigator.clipboard
    .writeText(first + " " + second + " " + third)
    .then(() => window.alert("この川柳をクリップボードにコピーしました！"));
});

// 初期の川柳を表示
let initialSenryu = getSenryu();
if (initialSenryu.length) {
  const index = getRandomInt(initialSenryu.length);
  changeText(0, initialSenryu[getRandomInt(initialSenryu.length)][0]);
  changeText(1, initialSenryu[getRandomInt(initialSenryu.length)][1]);
  changeText(2, initialSenryu[getRandomInt(initialSenryu.length)][2]);
}

