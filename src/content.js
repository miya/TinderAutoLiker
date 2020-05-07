let timer;

chrome.extension.onMessage.addListener(function (request) {
    const pageLang = getPageLang();

    let type = langDic[pageLang][request.type]

    if (request.active) {
        timer = setInterval(function () {btnClick(type)}, 100)
    }  else {
        clearInterval(timer)
    }

});


// ボタンクリック
function btnClick(type) {
    document.querySelector(`button[aria-label="${type}"]`).click();
}


// ページの言語を取得
function getPageLang() {
    return document.getElementById("Tinder").lang;
}


const langDic = {
  "ja": {
    "like": "いいね！",
    "nope": "いいえ"
  },

  "en": {
    "like": "Like",
    "nope": "Nope"
  },

  "zh-Hans": {
    "like": "赞",
    "nope": "不"
  },
}