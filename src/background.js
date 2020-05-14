// タブの消滅を監視してtinderUrlを開いているタブが無くなったらボタンステータスを全て非アクティブにする

const tinderUrl = "https://tinder.com/app/recs";

chrome.tabs.onRemoved.addListener(() => {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT},(tabs) => {
        const tabList = tabs.map(tab => tab.url);
        if (!tabList.includes(tinderUrl)) {
            localStorage.likeBtnStatus = "inactive";
            localStorage.nopeBtnStatus = "inactive";
        }
    });
})
