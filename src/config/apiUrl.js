let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin:ipUrl+'checkLogin' , //登录接口
    getTypeInfo:ipUrl+'getTypeInfo' , //获得文章类别信息
    addArticle:ipUrl+'addArticle' , //保存文章
    updateArticle:ipUrl+'updateArticle', //更新文章
    getArticleList:ipUrl+'getArticleList' , //查询文章列表
    delArticle:ipUrl+'delArticle/' , //删除文章
    getArticleById:ipUrl+'getArticleById/' ,//获取id得到文章详情
}

export default servicePath