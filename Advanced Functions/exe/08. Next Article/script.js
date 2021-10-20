function getArticleGenerator(articles) {
    let articleArr = articles;
    return () => {
        if (articleArr.length > 0) {
            let article = document.createElement('article');
            document.getElementById('content').appendChild(article);
            article.textContent = articleArr.shift();
        }
    }
}
