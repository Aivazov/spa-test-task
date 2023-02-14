import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Button from '@mui/material/Button';

import FilterForm from '../components/FilterForm/FilterForm';
import ResultsBar from '../components/ResultsBar/ResultsBar';
import Card from '../components/Card/Card';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

const fetchArticlesAPI = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 18,
}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => res.data.articles);
};

export default class NewsApp extends Component {
  state = {
    articles: [],
    filteringValue: '',
    currentPage: 1,
    searchQuery: 'nasa',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    // fetchArticlesAPI();
    this.fetchArticles();

    // if (this.state.articles !== null) {
    //   const gettingArticles = localStorage.getItem('articles');
    //   if (gettingArticles !== null) {
    //     const parsedArticles = JSON.parse(gettingArticles);
    //     this.setState({ gettingArticles: parsedArticles });
    //   }
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.searchQuery !== this.state.searchQuery) {
    // this.fetchArticles();
    // }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  onChangeFilterValue = (e) => {
    this.setState({ filteringValue: e.currentTarget.value });
    // console.log(this.state.stateFilter);
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchArticlesAPI(options)
      .then((articles) => {
        this.setState((prevState) => ({
          // articles: [...prevState.articles, ...articles],
          articles: articles,
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error, filteringValue } = this.state;
    // console.log(articles);
    const normalizedFilteringValue = filteringValue.toLowerCase();
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(normalizedFilteringValue)
    );
    const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

    return (
      <div style={{ margin: 15 }}>
        {/* {error && <h1>This is a mistake</h1>}

        <FilterForm
          // onSubmit={this.onChangeQuery}
          value={filteringValue}
          onChange={this.onChangeFilterValue}
        />
        <ResultsBar total={articles.length} />

        <ul className="card__list">
          {filteredArticles.map(
            ({ title, url, description, publishedAt, urlToImage }) => (
              // <li key={title}>
              //   <a href={url} target="_blank" rel="noopener noreferrer">
              //     {title}
              //   </a>
              // </li>
              <Card
                key={url}
                title={title}
                description={description}
                data={publishedAt}
                image={urlToImage}
              />
            )
          )}
        </ul>

        {shouldRenderLoadMoreButton && (
          <Button
            variant="contained"
            disabled={false}
            type="button"
            className="load-more__btn"
            onClick={this.fetchArticles}
          >
            Load More
          </Button>
        )}

        {isLoading && <p style={{ fontSize: 24 }}>Loading...</p>} */}
      </div>
    );
  }
}
