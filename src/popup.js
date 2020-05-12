// ポップアップが開かれた時の処理
const tinderUrl = "https://tinder.com/app/recs";

window.onload = () => {

    isTinder();
    isExistTinder();

    switch (localStorage.likeBtnStatus) {
        case undefined:
            localStorage.likeBtnStatus = "inactive";
            console.log("likeボタンステータスが定義されていないので非アクティブにしました");
            break;
        case "active":
            likeBtn.textContent = "like!";
            likeBtn.style.backgroundColor = "#409982";
            nopeBtn.disabled = true;
            console.log("likeボタンはアクティブです");
            break;
        case "inactive":
            console.log("likeボタンは非アクティブです");
            break;
    }

    switch (localStorage.nopeBtnStatus) {
        case undefined:
            localStorage.nopeBtnStatus = "inactive";
            console.log("nopeボタンステータスが定義されていないので非アクティブにしました");
            break;
        case "active":
            nopeBtn.textContent = "nope!";
            nopeBtn.style.backgroundColor = "#b05151";
            likeBtn.disabled = true;
            console.log("nopeボタンはアクィブです");
            break;
        case "inactive":
            console.log("nopeボタンは非アクティブです");
            break;
    }
};


// likeボタンが押された時の処理
const likeBtn = document.getElementById("like-btn");
likeBtn.onclick = () => {
    if (localStorage.likeBtnStatus === "inactive") {
        likeBtn.textContent = "like!";
        likeBtn.style.backgroundColor = "#409982";
        nopeBtn.disabled = true;
        localStorage.likeBtnStatus = "active";
        sendToContent("like", true);
        console.log("likeボタンがアクティブになりました！");
    } else {
        likeBtn.textContent = "like";
        likeBtn.style.backgroundColor = "#53c9aa";
        nopeBtn.disabled = false;
        localStorage.likeBtnStatus = "inactive";
        sendToContent("like", false);
        console.log("likeボタンがが非アクティブになりました！");
    }
};


// nopeボタンが押された時の処理
const nopeBtn = document.getElementById("nope-btn");
nopeBtn.onclick = () => {
    if (localStorage.nopeBtnStatus==="inactive") {
        nopeBtn.textContent = "nope!";
        nopeBtn.style.backgroundColor = "#b05151";
        likeBtn.disabled = true;
        localStorage.nopeBtnStatus = "active";
        sendToContent("nope", true);
        console.log("nopeボタンがアクティブになりました！");
    } else {
        nopeBtn.textContent = "nope";
        nopeBtn.style.backgroundColor = "#e86666";
        likeBtn.disabled = false;
        localStorage.nopeBtnStatus = "inactive";
        sendToContent("nope", false);
        console.log("nopeボタンが非アクティブになりました！");
    }
};


// 現在のタブのURLがtinderUrlかチェック
const isTinder = () => {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true},  (tabs) => {
        if (tabs[0].url === tinderUrl) {
            document.getElementById("button").hidden = false;
        } else {
            document.getElementById("url").hidden = false;
        }
    });
};


// 開いているタブのURLにtinderUrlが存在しているかチェック
const isExistTinder = () => {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT},(tabs) => {
        const tabList = tabs.map(tab => tab.url);
        if (!tabList.includes(tinderUrl)) {
            localStorage.likeBtnStatus = "inactive";
            localStorage.nopeBtnStatus = "inactive";
        }
    });
};


// コンテントスクリプトにボタンの種類と状態を送る
const sendToContent = (type, active) => {
    chrome.tabs.query({active: true, currentWindow: true},  (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {"type": type, "active": active});
    });
};