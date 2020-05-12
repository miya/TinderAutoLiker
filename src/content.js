let timer;

chrome.runtime.onMessage.addListener(function (request) {
    const pageLang = getPageLang();
    const type = langDic[pageLang][request.type];


    if (request.active) {
        timer = setInterval(function () {btnClick(type)}, 100)
    } else {
        clearInterval(timer);
    }

    return true;
})


// ボタンのクリック
const btnClick = (type) => {
    document.querySelector(`button[aria-label="${type}"]`).click();
};


//  lang属性の取得
const getPageLang = () => {
    return document.getElementById("Tinder").lang;
};



const langDic = {
    "en": {
        "like": "Like",
        "nope": "Nope"
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
        "like": "লাইক",
        "nope": "না"
    },

    "bs": {
        "like": "Označi da ti se sviđa",
        "nope": "Ne"
    },

    "ca": {
        "like": "M'agrada",
        "nope": "No"
    },

    "cs": {
        "like": "Líbí se mi",
        "nope": "Ne"
    },

    "da": {
        "like": "Synes godt om",
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

    "en-GB": {
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
        "like": "Like",
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

    "it": {
        "like": "Mi piace",
        "nope": "No"
    },

    "ja": {
        "like": "いいね！",
        "nope": "いいえ"
    },

    "ka": {
        "like": "ლაიქი",
        "nope": "არა"
    },

    "kk": {
        "like": "Лайк",
        "nope": "Жоқ"
    },

    "ko": {
        "like": "좋아요",
        "nope": "통과"
    },

    "lt": {
        "like": "Patinka",
        "nope": "Nea"
    },

    "lv": {
        "like": "Patīk",
        "nope": "Nē"
    },

    "mk": {
        "like": "Лајк",
        "nope": "Не"
    },

    "ms": {
        "like": "Suka",
        "nope": "Tidak"
    },

    "nb": {
        "like": "Liker",
        "nope": "Niks"
    },

    "nl": {
        "like": "Leuk",
        "nope": "Nee bedankt"
    },

    "pl": {
        "like": "Polub",
        "nope": "Żegnam"
    },

    "pt": {
        "like": "Curti",
        "nope": "Não"
    },

    "pt-PT": {
        "like": "Gosto",
        "nope": "Não"
    },

    "ro": {
        "like": "Like",
        "nope": "Nu"
    },

    "ru": {
        "like": "Лайк",
        "nope": "Нет"
    },

    "sk": {
        "like": "Lajkovať",
        "nope": "Nie"
    },

    "sl": {
        "like": "Všečkaj",
        "nope": "Ne"
    },

    "sr": {
        "like": "Sviđa mi se",
        "nope": "Ne"
    },

    "sv": {
        "like": "Gilla",
        "nope": "Nej"
    },

    "ta": {
        "like": "விருப்பம்",
        "nope": "இல்லை"
    },

    "te": {
        "like": "లైక్",
        "nope": "వద్దు"
    },

    "th": {
        "like": "ถูกใจ",
        "nope": "ไม่ดีกว่า"
    },

    "tl": {
        "like": "Like",
        "nope": "Hindi"
    },

    "tr": {
        "like": "Beğen",
        "nope": "Hayır"
    },

    "uk": {
        "like": "Вподобати",
        "nope": "Ні"
    },

    "vi": {
        "like": "Thích",
        "nope": "Không"
    },

    "zh-Hans": {
        "like": "赞",
        "nope": "不"
    },

    "zh-Hant": {
        "like": "喜歡讃",
        "nope": "不"
    },
};