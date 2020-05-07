// ポップアップが開かれた時の処理
window.onload = function () {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        const currentUrl = tabs[0].url;
        if (currentUrl !== "https://tinder.com/app/recs") {
            document.getElementById("like").hidden = true;
            document.getElementById("nope").hidden = true;
        }
    });

    // localStorage.clear();

    switch (localStorage.likeBtnStatus) {
        case undefined:
            localStorage.likeBtnStatus = "inactive";
            break;
        case "active":
            likeBtn.checked = true;
            nopeBtn.disabled = true;
            break;
        default:
            localStorage.likeBtnStatus = "inactive";
            break;
    }

    switch (localStorage.nopeBtnStatus) {
        case undefined:
            localStorage.nopeBtnStatus = "inactive"
            break;
        case "active":
            likeBtn.disabled = true;
            nopeBtn.checked = true;
            break;
        default:
            localStorage.nopeBtnStatus = "inactive";
            break;
    }
}


// ボタンが押された時の処理
const likeBtn = document.getElementById("like-btn");
likeBtn.onchange = function () {
    if (likeBtn.checked) {
        nopeBtn.disabled = true;
        localStorage.likeBtnStatus = "active";
        sendToContent("like", true)
    } else {
        nopeBtn.disabled = false;
        localStorage.likeBtnStatus = "inactive";
        sendToContent("like", false);
    }
}


const nopeBtn = document.getElementById("nope-btn");
nopeBtn.onchange = function () {
    if (nopeBtn.checked) {
        likeBtn.disabled = true;
        localStorage.nopeBtnStatus = "active";
        sendToContent("nope", true);
    } else {
        likeBtn.disabled = false;
        localStorage.nopeBtnStatus = "inactive";
        sendToContent("nope", false);
    }
}

// コンテントスクリプトに渡す
function sendToContent(type, active) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"type": type, "active": active});
   });
}



