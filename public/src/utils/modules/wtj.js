const wtj = weex.requireModule('wtj');

var lastPageName = '';

function onPageStart(pageName){
    return new Promise((resolve, reject) => {
        if (!pageName){
            reject('pageName is invalue !!!');
            return;
        }
        if (lastPageName){
            wtj.onPageEnd(lastPageName);
        }
        wtj.onPageStart(pageName);
        lastPageName = pageName;
        resolve();
    })
}

function onPageEnd() {
    console.log('onPageEnd ' + lastPageName);
    return new Promise((resolve, reject) => {
        if (!lastPageName){
            reject('lastPageName is invalue !!!');
            return;
        }
        wtj.onPageEnd(lastPageName);
        lastPageName = '';
        resolve();
    });
}

export default {
    onPageStart, onPageEnd
}