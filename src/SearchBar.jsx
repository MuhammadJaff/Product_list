import React from 'react'

const SearchBar = ({inStock,filterText,filterChange,stockChange}) => {
  return (
    <div className='searchbar_full'>
      
        <input onChange={(e)=>filterChange(e.target.value)}
        value={filterText}
        className='search_itself' type="text" 
        placeholder='Search...' />

        <div className='search_bar_cont'>
          <input type="checkbox" value={inStock}
          onChange={(e)=>stockChange(e.target.checked)}/>
          <p>Only show products in stock</p>
        </div>
    </div>
  )
}

export default SearchBar