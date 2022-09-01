import React, {useContext} from 'react'
import { ProductsContext } from '../../context/ProductsContext';

import ProductCard from '../../components/ProductCard'
import ProductFilter from './filter/ProductFilter'

function Home() {

  const {newProducts} = useContext(ProductsContext);
  
  return (
    <>
      <ProductFilter />
      <main className='grid grid-cols-4 gap-2 m-4'>
        {newProducts.map((i) => {
          return (
            <ProductCard key={i.id} product={i}/>
          )
        })}
      </main>
    </>  

  )
}

export default Home