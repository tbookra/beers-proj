import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import RemoveFavoredModal from './RemoveFavoredModal'

import '../Page.css';
import ProductComponent from './ProductComponent';

function FavoredProductPage() {
    const favoredProductsStored = useSelector((state)=> state.favored_product);
    const [page] = useState(1)
    
    useEffect(() => {
   
    },[page])
  return (
    <div className='container1'>
        <div className='buttonsDiv'>
            <div><RemoveFavoredModal /></div>
        </div>
        <ProductComponent  products={favoredProductsStored} favoredMode={true}/>
    </div>
        
  )
}

export default FavoredProductPage