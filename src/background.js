chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.msg);
        sendResponse({msg: request.msg})
})