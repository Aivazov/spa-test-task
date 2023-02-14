import React, { useState, useEffect } from 'react';
import '../components/pages_styles/Main/Main.css';

import FilterForm from '../components/FilterForm/FilterForm.tsx';
import ResultsBar from '../components/ResultsBar/ResultsBar.tsx';
import Card from '../components/Card/Card.js';
import Loader from '../components/Loader/Loader.tsx';
import { fetchArticlesAPI } from '../api/fetchArticles.js';

export default function Main() {
  const [articles, setArticles] = useState([]);
  const [filteringValue, setFilteringValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSerchQuery] = useState('nasa');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const useOnChangeQuery = (query) => {
  //   useEffect(() => {
  //     setArticles([]);
  //     setCurrentPage(1);
  //     setSerchQuery(query);
  //     setError(null);
  //   }, []);
  // };

  const onChangeFilterValue = (e) => {
    setFilteringValue(e.currentTarget.value);
  };

  const fetchArticles = () => {
    const options = { searchQuery, currentPage };

    setIsLoading(true);

    setTimeout(() => {
      fetchArticlesAPI(options)
        .then((articles) => {
          setArticles(articles);
          setCurrentPage(currentPage + 1);
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }, 300);
  };

  useEffect(() => {
    if (!fetchArticlesAPI) return;
    fetchArticles();
  }, []);

  const normalizedFilteringValue = filteringValue.toLowerCase();
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(normalizedFilteringValue)
  );

  const shouldRenderLoadMoreButton = filteredArticles.length > 0 && !isLoading;
  return (
    <div className="App">
      <div className="wrap">
        <div style={{ margin: 15 }}>
          {error && <h1>This is a mistake {error.message}</h1>}

          <FilterForm value={filteringValue} onChange={onChangeFilterValue} />
          {/* <p>
            <mark>{normalizedFilteringValue}</mark>
          </p> */}
          <ResultsBar total={filteredArticles.length} />

          {/* Rendering Cards */}

          <ul className="card__list">
            <Card cards={filteredArticles} />
          </ul>

          {/* Load More Button */}

          {/* {shouldRenderLoadMoreButton && (
              <Button
                variant="contained"
                disabled={false}
                type="button"
                className="load-more__btn"
                onClick={this.fetchArticles}
              >
                Load More
              </Button>
            )} */}

          {/* Loading */}

          {isLoading && <Loader />}

          {/* No matches check */}

          {!shouldRenderLoadMoreButton && !isLoading && !error && (
            <p>No matches. Please try again</p>
          )}
        </div>
      </div>
    </div>
  );
}
