import React, {useEffect,useState, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { Card, Icon, Dropdown } from 'semantic-ui-react'
import {add_selectedProducts,removeSelectedProducts, rateBeer} from '../redux/actions/productActions'


function Favored({favoredProduct, product, favoredMode,hasFavoredChanged}) {
  const {rate} = product
    const [isfavored, setIsFavored] = useState(favoredProduct)
    const [productGrade, setProductGrade] = useState(rate)
    const dispatch = useDispatch()
    const favorRef = useRef(favoredProduct)
    

    const options = [
      { key: '1', text: '1', value: '1' },
      { key: '2', text: '2', value: '2' },
      { key: '3', text: '3', value: '3' },
      { key: '4', text: '4', value: '4' },
      { key: '5', text: '5', value: '5' },
    ]
    
    
    const handleFavoredClick = () => {
        setIsFavored(favore => !favore)
        favorRef.current = !favorRef.current
        hasFavoredChanged()
        if(favorRef.current){
            dispatch(add_selectedProducts({product}))
        } else {
            dispatch(removeSelectedProducts({product}))
        }
        
    }

    const handleDropdownChange = (event, data) => {
      // console.log("changed!!!", data.value, product);
      setProductGrade(data.value)
      dispatch(rateBeer({id:product.id, val: data.value}))
    }

    useEffect(() => {
      setIsFavored(favoredProduct)
    },[favoredProduct])

  return (
    <>
        <Card.Content extra>
                      <>
                      {favoredMode && isfavored && productGrade && <div>Grade: {productGrade} </div>}
                      <span>Like It?  </span> 
                        <Icon name={isfavored ? "star" : "star outline"} onClick={()=>handleFavoredClick()} />
                        {favoredMode && isfavored && 
                        <Dropdown placeholder='Rate' fluid selection options={options} onChange={handleDropdownChange} />
                        }
                      </>
                      
                    </Card.Content>
                    
    </>
  )
}

export default Favored