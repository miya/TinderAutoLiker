// ポップアップが開かれた時の処理
window.onload = function () {

    // localStorage.clear();

    check()

    switch (localStorage.likeBtnStatus) {
        case undefined:
            localStorage.likeBtnStatus = "inactive";
            console.log("ライクボタンステータスが定義されていないので非アクティブにしました");
            break;
        case "active":
            likeBtn.textContent = "like!";
            likeBtn.style.backgroundColor = "#409982";
            nopeBtn.disabled = true;
            console.log("ライクボタンはアクティブです");
            break;
        case "inactive":
            console.log("ライクボタンは非アクティブです")
            break;
    }

    switch (localStorage.nopeBtnStatus) {
        case undefined:
            localStorage.nopeBtnStatus = "inactive";
            console.log("ノープボタンステータスが定義されていないので非アクティブにしました")
            break;
        case "active":
            nopeBtn.textContent = "nope!";
            nopeBtn.style.backgroundColor = "#b05151";
            likeBtn.disabled = true;
            console.log("ノープボタンはアクィブです");
            break;
        case "inactive":
            console.log("ノープボタンは非アクティブです");
    }

}


// ボタンが押された時の処理
const likeBtn = document.getElementById("like-btn");
likeBtn.onclick = function () {
    if (localStorage.likeBtnStatus === "inactive") {
        likeBtn.textContent = "like!"
        likeBtn.style.backgroundColor = "#409982"
        nopeBtn.disabled = true;
        localStorage.likeBtnStatus = "active";
        sendToContent("like", true);
        console.log("ライクボタンがアクティブになりました！");
    } else {
        likeBtn.textContent = "like"
        likeBtn.style.backgroundColor = "#53c9aa"
        nopeBtn.disabled = false;
        localStorage.likeBtnStatus = "inactive";
        sendToContent("like", false);
        console.log("ライクボタンがが非アクティブになりました！");
    }
}

const nopeBtn = document.getElementById("nope-btn");
nopeBtn.onclick = function () {
    if (localStorage.nopeBtnStatus==="inactive") {
        nopeBtn.textContent = "nope!"
        nopeBtn.style.backgroundColor = "#b05151"
        likeBtn.disabled = true;
        localStorage.nopeBtnStatus = "active";
        sendToContent("nope", true);
        console.log("ノープボタンがアクティブになりました！");
    } else {
        nopeBtn.textContent = "nope"
        nopeBtn.style.backgroundColor = "#e86666"
        likeBtn.disabled = false;
        localStorage.nopeBtnStatus = "inactive";
        sendToContent("nope", false);
        console.log("ノープボタンが非アクティブになりました！");
    }
}


// 現在のタブがTinderかチェック
function check() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {

        // 現在のタブがTinderかチェック
        if (tabs[0].url === "https://tinder.com/app/recs") {

            // 対応言語かチェック
            chrome.tabs.sendMessage(tabs[0].id, {"isSupported": true}, function (response) {
                if(response) {
                    document.getElementById("button").hidden = false;
                } else {
                    document.getElementById("button").hidden = true;
                    document.getElementById("warning").hidden = false;
                }
            })
        } else {
            document.getElementById("url").hidden = false;
            return false;
        }
    })
}

// コンテントスクリプトに渡す
function sendToContent(type, active) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, {"type": type, "active": active}, function () {});});
}

