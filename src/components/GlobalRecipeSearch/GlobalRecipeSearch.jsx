import React, { useState, useEffect, useRef } from 'react';
import styles from './GlobalRecipeSearch.module.scss';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { searchRecipeByName } from 'functions/recipes';
import RecipeListItem from 'components/RecipeListItem';


let timeout = null;



function GlobalRecipeSearch() {
  
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const searchField = useRef(null);


  useEffect(() => {
    if (open){
      setSearch("");
      setResults([]);
      searchField.current.focus();
    }
  }, [open]);

  useEffect(() => {
    async function fetchData(){
      const results = await searchRecipeByName(search);
      setResults(results);
    }

    // debounce it to avoid hitting the api on every keystroke
    // will call only after 600ms of no input
    clearTimeout(timeout);
    if (search){
      timeout = setTimeout(() => fetchData(), 600);
    }
  }, [search]);


  return (
    <div className={styles.GlobalRecipeSearch}>
      <FontAwesomeIcon 
        icon={faSearch} 
        className={styles.OpenSearchButton} 
        onClick={() => setOpen(!open)}
        />

      <div className={classnames(styles.SearchModal, {[styles.ModalOpen]: open})}>
        <div className={styles.SearchHeader}>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => setOpen(false)} />
          <input 
            type="text" 
            value={search} 
            ref={searchField} 
            placeholder="I'm craving..." 
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className={styles.SearchResults}>
          {results && results.map((result, i) => {
            return <RecipeListItem key={i} recipe={result} />;
          })}
        </div>
      </div>

    </div>
  );
}

export default GlobalRecipeSearch;
