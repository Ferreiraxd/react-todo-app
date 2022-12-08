import React from 'react';
import '../assets/styles/_TodoSearch.scss';
import { TodoContext } from './TodoContext';

export default function TodoSearch() {

    const { searchString, isEmpty, handleSearch, setSearchString} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        handleSearch(event.target.value);
    };

  return (
    <div className='searchBar'>
        <input 
            onChange={onSearchValueChange}
            value={searchString}
        ></input>
        <label
            className={`${!isEmpty && 'inputWithContent'}`}>
            Buscar
        </label>
    </div>
  )
}
