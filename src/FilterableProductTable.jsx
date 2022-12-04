import React,{useState} from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({alldata}) => {
  const [filterText,setFilterText] = useState("");
  const [inStock,setInStock] = useState(false);
  return(
    <div className='container_all'>
      <SearchBar 
      filterText= {filterText} 
      inStock= {inStock}
      filterChange={setFilterText}
      stockChange={setInStock}/>
      <ProductTable alldata={alldata} filterText= {filterText} inStock= {inStock}/>
    </div>
  )
}

export default FilterableProductTable