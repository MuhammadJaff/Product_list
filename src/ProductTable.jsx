import React from 'react'

const ProductCategoryRow = ({category})=>{
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}
const ProductRow = ({product,texted})=>{
  if(texted===product.name){
    alert("find");
  }
  const name = product.stocked ? product.name :
  <span style={{ color: 'red' }}>
      {product.name}
  </span>;

  return(
    <tr>
      <td className='row_of'>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const ProductTable = ({alldata,filterText,inStock}) => {
  const texted = JSON.parse(localStorage.getItem("text"));
  const rows = [];
  let unidefinedCategory = null;

  alldata.forEach((product) => {
    if(product.name.toLowerCase()
      .indexOf(filterText.toLowerCase()) === -1){
        return ;
    }
    if(inStock && !product.stocked){
      return ;
    }

    if (product.category !== unidefinedCategory){
      rows.push(
        <ProductCategoryRow 
          key={product.category} 
          category={product.category}/>
    )}
    rows.push(
        <ProductRow 
          texted = {texted}
          key={product.name} 
          product={product}/>);
      
      unidefinedCategory = product.category;
  });

  return (
    <div>
      <table>
        <thead>
          <tr className='headers_of'>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table><br /><br />
    </div>
  )
}

export default ProductTable