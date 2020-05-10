let timer;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const pageLang = getPageLang();

    // 対応言語かチェック
    if (request.isSupported) {
        if (langDic[pageLang]) {
            sendResponse(true);
        } else {
            sendResponse(false);
        }

    } else {
        const type = langDic[pageLang][request.type];
        if (request.active) {
            timer = setInterval(function () {btnClick(type)}, 100)
        } else {
            clearInterval(timer);
        }
        sendResponse({});
    }
})


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

    "af": {
        "like": "Hou van",
        "nope": "Nee"
    },

    "ar": {
        "like": "إعجاب",
        "nope": "لا"
    },

    "az": {
        "like": "Bəyən",
        "nope": "Xeyr"
    },

    "bg": {
        "like": "Харесвам",
        "nope": "Не"
    },

    "bn": {
        "like": "লাইক", // ダメです
        "nope": "না"
    },

    "bs": {
        "like": "Označi da ti se sviđa", // ダメです
        "nope": "Ne"
    },

    "ca": {
        "like": "M'agrada", // ダメです
        "nope": "No"
    },

    "da": {
        "like": "Synes godt om", // ダメです
        "nope": "Niks"
    },

    "de": {
        "like": "Gefällt mir",
        "nope": "Nein"
    },

    "el": {
        "like": "Μου αρέσει",
        "nope": "Όχι"
    },

    "en-AU": {
        "like": "Like",
        "nope": "Nope"
    },

    "en": {
        "like": "Like",
        "nope": "Nope"
    },

    "es-AR": {
        "like": "Like",
        "nope": "Nop"
    },

    "es-ES": {
        "like": "Me gusta",
        "nope": "Nope"
    },

    "et": {
        "like": "Like",
        "nope": "Nope"
    },

    "es": {
        "like": "Like",
        "nope": "No"
    },

    "eu": {
        "like": "Like",
        "nope": "Interesik gabea"
    },

    "fi": {
        "like": "Tykkään",
        "nope": "Ei"
    },

    "fr": {
        "like": "Like",
        "nope": "Non"
    },

    "fr-CA": {
        "like": "Like",  // ダメです
        "nope": "Non"
    },

    "gl": {
        "like": "Gústame",
        "nope": "Non"
    },

    "he": {
        "like": "מעוניין/ת",
        "nope": "לא!"
    },

    "hi": {
        "like": "पसंद करें",
        "nope": "नहीं"
    },

    "hr": {
        "like": "Sviđa mi se",
        "nope": "Ne"
    },

    "hu": {
        "like": "Tetszik",
        "nope": "Nem"
    },

    "id": {
        "like": "Suka",
        "nope": "Nggak"
    },

    "zh-Hans": {
        "like": "赞",
        "nope": "不"
    },

    "ko": {
        "like": "좋아요",
        "nope": "통과"
    },
};