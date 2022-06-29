import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'
import RemoveFavoredModal from './RemoveFavoredModal'

import '../Page.css';
// import {} from "../redux/actions/productActions"
import ProductComponent from './ProductComponent';

function ProductListing() {
    const favoredProducts = useSelector((state)=> state);
    const [products, setProducts] = useState([])
    const [page,setPage] = useState(1)
    const dispatch = useDispatch()
    const badImage = "https://images.punkapi.com/v2/keg.png"
    const altImage = "https://images.punkapi.com/v2/91.png"
    

    const handlePageBtnClick = (dir) => {
        if(dir==="up"){
            setPage(count=> count+1)
        } else {
            if(page !== 1) setPage(count=> count-1)
        }
    }


    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=24`).catch((err) => {
                console.log("error",err)
            })
            data.map((item) =>  item.image_url === badImage ? item.image_url = altImage : "" )
            // console.log("data",data)
            setProducts(data)
            console.log('favoredProducts',favoredProducts)
            // dispatch(setProducts(data))
        }
        fetchProducts(page)
    },[page, favoredProducts])
    // console.log({products})
  return (
    <div className='container1'>
        <div className='buttonsDiv'>
            <div><Button content='Prev' icon='left arrow' labelPosition='left' onClick={() => handlePageBtnClick("down")} /></div>
            <div><RemoveFavoredModal /></div>
            <div><Button content='Next' icon='right arrow' labelPosition='right' onClick={() => handlePageBtnClick("up")} /></div>
        </div>
            <ProductComponent  products={products} favoredMode={false} />
        </div>
        
  )
}

export default ProductListing