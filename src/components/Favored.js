import React, {useEffect,useState, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react'
import {add_selectedProducts,removeSelectedProducts} from '../redux/actions/productActions'


function Favored({favoredProduct, product}) {
    const [isfavored, setIsFavored] = useState(favoredProduct)
    const dispatch = useDispatch()
    const favorRef = useRef(favoredProduct)

    
    const handleFavoredClick = () => {
        setIsFavored(favore => !favore)
        favorRef.current = !favorRef.current
        if(favorRef.current){
            dispatch(add_selectedProducts({product}))
        } else {
            dispatch(removeSelectedProducts({product}))
        }
        
    }

    useEffect(() => {
      setIsFavored(favoredProduct)
    },[favoredProduct])

  return (
    <>
        <Card.Content extra>
                      <a>
                      <span>Like It?  </span> 
                        <Icon name={isfavored ? "star" : "star outline"} onClick={()=>handleFavoredClick()} />
                       
                      </a>
                    </Card.Content>
    </>
  )
}

export default Favored