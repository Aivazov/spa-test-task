import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import Highlighter from 'react-highlight-words'
import { BiSearch } from 'react-icons/bi';
import '../components_styles/FilterForm/FilterForm.css';

export default function FilterForm({ onSubmit, value, onChange }) {
  const [searchRequest, setSearchRequest] = useState('');

  // const handleNameChange = (event) => {
  //   setSearchRequest(event.target.value.toLowerCase());
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchRequest);
    if (searchRequest.trim() === '') {
      return toast.error('Please enter an article name');
    }
    setSearchRequest('');
  };

  return (
    <header className="searchbar">
      <p>Filter by keywords</p>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <BiSearch size="20" className="react-icons-search" />
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search articles"
          value={value}
          onChange={onChange}
        />
      </form>
    </header>
  );
}
