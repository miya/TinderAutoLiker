// コンテントスクリプトに渡す
function sendToContent(type, active) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"type": type, "active": active});
   });
}


// 現在のタブのURLを取得
chrome.tabs.getSelected(tab => {
    let currentUrl = tab.url
})


const likeBtn = document.getElementById("like-btn");
likeBtn.onchange = function () {
    if (likeBtn.checked) {
        sendToContent("like", true)
        nopeBtn.disabled = true;
    } else {
        sendToContent("like", false)
        nopeBtn.disabled = false;
    }
}


const nopeBtn = document.getElementById("nope-btn");
nopeBtn.onchange = function () {
    if (nopeBtn.checked) {
        sendToContent("nope", true)
        likeBtn.disabled = true;
    } else {
        sendToContent("nope", false)
        likeBtn.disabled = false;
    }
}


