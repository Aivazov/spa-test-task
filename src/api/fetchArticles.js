import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

let articles = [];

export const fetchArticlesAPI = ({
  searchQuery = 'nasa',
  currentPage = 1,
  pageSize = 50,
}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => {
      articles = res.data.articles;

      return res.data.articles;
    })
    .then((data) => {
      const newArr = [];
      data.map((el, idx) => {
        const newEl = { ...el, idx };
        newArr.push(newEl);
      });
      articles = newArr;

      return articles;
    });
};

export const getArticleById = (articleId) => {
  return articles.find((article) => {
    const parsed = String(article.idx);
    return parsed === articleId;
  });
};
