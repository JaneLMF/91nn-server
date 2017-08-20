import apiUtils from 'utils/api'

//首页获取文章
var getArticleInHome = function(userId, maxLength, isFirstTime) {
    var params = {
        userId: '598eca8c9f4489110c5b7fee',
        maxLength: 10,
        isFirstTime: true
    }
    return apiUtils.get('api/homePage', params);
}

//通过ID获取文章
var getArticleByID = function(articleID) {
    var params = {
        id: '598953513dcfac3d6714d90b'
    }
    return apiUtils.get('api/article', params);
}

export default {
    getArticleInHome, getArticleByID
}