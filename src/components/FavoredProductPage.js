import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
// import { Button } from 'semantic-ui-react'
import RemoveFavoredModal from './RemoveFavoredModal'

import '../Page.css';
// import {} from "../redux/actions/productActions"
import ProductComponent from './ProductComponent';

function FavoredProductPage() {
    const favoredProductsStored = useSelector((state)=> state.favored_product);
    // let favoredProducts = []
    const [page] = useState(1)
    // const dispatch = useDispatch()
    
    

    // const handlePageBtnClick = (dir) => {
    //     if(dir==="up"){
    //         setPage(count=> count+1)
    //     } else {
    //         if(page !== 1) setPage(count=> count-1)
    //     }
    // }


    useEffect(() => {
   
    },[page])
  return (
    <div className='container1'>
        <div className='buttonsDiv'>
        <div><RemoveFavoredModal /></div>
            {/* <div><Button content='Prev' icon='left arrow' labelPosition='left' onClick={() => handlePageBtnClick("down")} /></div>
            <div><Button content='Next' icon='right arrow' labelPosition='right' onClick={() => handlePageBtnClick("up")} /></div> */}
        </div>
            <ProductComponent  products={favoredProductsStored} favoredMode={true}/>
        </div>
        
  )
}

export default FavoredProductPage