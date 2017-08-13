const wtj = weex.requireModule('wtj');

function onPageStart(pageName){
    return new Promise((resolve, reject) => {
        if (!pageName){
            reject('pageName is invalue !!!');
            return;
        }
        wtj.onPageStart(pageName);
        resolve();
    })
}

function onPageEnd(pageName) {
    return new Promise((resolve, reject) => {
        if (!pageName){
            reject('pageName is invalue !!!');
            return;
        }
        wtj.onPageEnd(pageName);
        resolve();
    });
}

export default {
    onPageStart, onPageEnd
}