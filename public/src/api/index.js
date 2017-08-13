import apiUtils from 'utils/api'

//首页获取文章
var getArticleInHome = function(_start, _length) {
    var params = {
        topCategory: 'home',
        start: 0,
        length: 1000
    }
    return apiUtils.get('api/article', params);
}

export default {
    getArticleInHome
}