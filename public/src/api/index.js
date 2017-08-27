import apiUtils from 'utils/api'

//注册
var register = function (_code, _phone, _password) {
    var params = {
        code: _code,
        phone: _phone,
        password: _password
    }
    return apiUtils.post('api/sendIdentifyCode', params);
}

//登录
var login = function (_phone, _password) {
    var params = {
        phone: _phone,
        password: _password
    }
    return apiUtils.post('api/login', params);
}

//获取短信验证码
var getMesgVerify = function (_phone) {
    var params = {
        phone: _phone
    }
    return apiUtils.post('api/requestIdentifyCode', params);
}

//修改用户性别，昵称
var updateUserNickSex = function (_id, _sex, _nick) {
    var params = {
        id: _id,
        sex: _sex,
        nick: _nick
    }
    return apiUtils.put('api/userProfile', params);
}

//关注用户
var concernUser = function(_userId, _concernedId) {
    var params = {
        userId: _userId,
        concernedId: _concernedId
    }
    return apiUtils.get('api/concernUser', params);
}

//首页获取文章
var getArticleInHome = function(_userId, _maxLength, _isFirstTime) {
    var params = {
        userId: _userId,
        maxLength: _maxLength,
        isFirstTime: _isFirstTime
    }
    return apiUtils.get('api/homePage', params);
}

//转发文章
var repostArticle = function (_comment) {
    var params = {
        targetType: "article",
        targetId: "59895e103dcfac3d6714d90c",
        author: "598eca8d9f4489110c5b7fef",
        comment: _comment
    }
    return apiUtils.post('api/transmit', params);
}

//发动态
var createNews = function (_content) {
    var params = {
        author: "598eca8d9f4489110c5b7fef",
        title: '',
        content: _content
    }
    return apiUtils.post('api/article', params);
}

//发文章
var createArticles = function (_tit, _content) {
    var params = {
        author: "598eca8d9f4489110c5b7fef",
        title: _tit,
        content: _content
    }
    return apiUtils.post('api/article', params);
}

//通过ID获取文章
var getArticleByID = function(articleID) {
    var params = {
        id: '598953513dcfac3d6714d90b'
    }
    return apiUtils.get('api/article', params);
}

export default {
    register, login, getMesgVerify, updateUserNickSex, concernUser, getArticleInHome, repostArticle, createNews, createArticles, getArticleByID
}