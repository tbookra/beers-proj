import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'
import { useSelector } from 'react-redux';
import { Button, Input } from 'semantic-ui-react'
import RemoveFavoredModal from './RemoveFavoredModal'

import '../Page.css';
import ProductComponent from './ProductComponent';



function ProductListing() {
    const favoredProducts = useSelector((state)=> state.favored_product);
    const [products, setProducts] = useState([])
    const [page,setPage] = useState(1)
    const [, setSearchMode] = useState(false)
    const searchStr = useRef(0)
    const lastFetch = useRef()

    const badImage = "https://images.punkapi.com/v2/keg.png"
    const altImage = "https://images.punkapi.com/v2/91.png"

    const handlePageBtnClick = (dir) => {
        if(dir==="up"){
            setPage(count=> count+1)
        } else {
            if(page !== 1) setPage(count=> count-1)
        }
    }

   

    const handleSearchChange = async (event,data) => {
        let timer;
        searchStr.current = event.target.value
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(async() => {
            if(searchStr.current.length === 0)  {
                setProducts(lastFetch.current)
                setSearchMode(prev => !prev)
            }
            if(searchStr.current.length > 1){
                const searchedData = await axios.get(`https://api.punkapi.com/v2/beers?food=${searchStr.current}`)
                if(searchedData){
                    setProducts(searchedData.data)
                }
            } 
        },300)
        
     }

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=24`).catch((err) => {
                console.log("error",err)
            })
            data.map((item) =>  item.image_url === badImage ? item.image_url = altImage : "" )
            lastFetch.current = data
            setProducts(data)
        }
        
        fetchProducts(page)
        
    },[page, favoredProducts])
  return (
    <div className='container1'>
        <div className='searchDiv'> <Input className='searchInput' onChange={handleSearchChange} icon='search' placeholder='Search by matching food...   ' /></div>
        <div className='buttonsDiv'>
            {products.length===24 && <div><Button content='Prev' icon='left arrow' labelPosition='left' onClick={() => handlePageBtnClick("down")} /></div>}
            <div><RemoveFavoredModal /></div>
            {products.length===24 && <div><Button content='Next' icon='right arrow' labelPosition='right' onClick={() => handlePageBtnClick("up")} /></div>}
        </div>
            <ProductComponent  products={products} favoredMode={false} />
        </div>
        
  )
}

export default ProductListing