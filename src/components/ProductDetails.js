import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import axios from 'axios'
// import {selectedProducts, removeSelectedProducts} from '../redux/actions/productActions'
import '../Page.css';


function ProductDetails() {
    const product = useSelector((state)=> state.product)
    const { title, image, price, category, description} = product
    const {id} = useParams()
    const dispatch = useDispatch()
    console.log({product})

    

useEffect(() => {
    const fetchProductDetail = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err => {
            console.log("err",err)
        })
        // dispatch(selectedProducts(data))
    }
    if(id && id !=='') fetchProductDetail()
    return () => {
        // dispatch(removeSelectedProducts())
    }
}, [id,dispatch])

  return (
    <div className='ui grid container'>
        {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ) : (
            <div className='ui placeholder segment'>
                <div className='ui two colomn stackable center aligned grid'>
                    <div className='ui vertical divider'>AND</div>
                    <div className='middle aligned row'>
                        <div className='column lp'>
                            <img className='ui fluid image' src={image} alt={title} />
                        </div>
                    <div className='column rp'></div>
                        <h1>{title}</h1>
                        <h2>
                            <a className='ui teal tag label'>${price}</a>
                        </h2>
                        <h3 className='ui brown block header'>{category}</h3>
                        <p>{description}</p>
                        <div className='ui vertical animated button' tabIndex="0">
                            <div className='hidden content'>
                                <i className='shop icon'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    </div>
  )
}

export default ProductDetails