// ポップアップが開かれた時の処理
window.onload = function () {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        const currentUrl = tabs[0].url;
        if (currentUrl === "https://tinder.com/app/recs") {
            document.getElementById("button").hidden = false;
        } else {
            document.getElementById("url").hidden = false;
        }

    });

    // localStorage.clear();

    switch (localStorage.likeBtnStatus) {
        case undefined:
            localStorage.likeBtnStatus = "inactive";
            console.log("ライクボタンステータスが定義されていないので非アクティブにしました");
            break;
        case "active":
            nopeBtn.disabled = true
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
            likeBtn.disabled = true
            console.log("ノープボタンはアクィブです");
            break;
        case "inactive":
            console.log("ノープボタンは非アクティブです");
    }

}

const likeBtn = document.getElementById("like-btn");
likeBtn.onclick = function () {
    if (localStorage.likeBtnStatus === "inactive") {
        nopeBtn.disabled = true;
        localStorage.likeBtnStatus = "active";
        sendToContent("like", true);
        console.log("ライクボタンがアクティブになりました！");
    } else {
        nopeBtn.disabled = false;
        localStorage.likeBtnStatus = "inactive";
        sendToContent("like", false);
        console.log("ライクボタンがが非アクティブになりました！");
    }
}

const nopeBtn = document.getElementById("nope-btn");
nopeBtn.onclick = function () {
    if (localStorage.nopeBtnStatus==="inactive") {
        likeBtn.disabled = true;
        localStorage.nopeBtnStatus = "active";
        sendToContent("nope", true);
        console.log("ノープボタンがアクティブになりました！");
    } else {
        likeBtn.disabled = false;
        localStorage.nopeBtnStatus = "inactive";
        sendToContent("nope", false);
        console.log("ノープボタンが非アクティブになりました！");
    }
}

// コンテントスクリプトに渡す
function sendToContent(type, active) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"type": type, "active": active});
   });
}



