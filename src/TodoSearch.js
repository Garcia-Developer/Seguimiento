
import React from 'react';
import './TodoSearch.css';


function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState(``);

  console.log(`Los usuario buscan todos de` + searchValue);

  return (
    <input 
    placeholder="Cortar cebolla"
    className="TodoSearch"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
      console.log(`Escribe en el TodoSearch`);
      console.log(event);
      console.log(event.target);
      console.log(event.target.value);

    }}
    />
    );
  }
  export {TodoSearch};