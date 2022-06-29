import React, {useEffect, useState} from 'react' 
import { useSelector } from 'react-redux';
// import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import Favored from './Favored'
import BeerModal from './BeerModal'
import '../Page.css';


function ProductComponent({products,favoredMode}) {
    const favoredProducts = useSelector((state)=>state.favored_product)
    const [renderedProducts, setRenderedProducts] = useState(products)
    console.log("favoredProducts from main", favoredProducts);
    if(!Array.isArray(products)){
        let productArr = []
        for (const property in products){
            productArr.push(products[property].product)
      }
      products = productArr
    }

    useEffect(() => {
        setRenderedProducts(products)
    },[favoredProducts,products])

    const renderList = (items) =>{
        return (
            items.map((product) => {
                const {id, name, image_url, description} = product
                return (
               
                    <Card key={id}>
                    <BeerModal itemData={product}>
                    <Image src={image_url} wrapped ui={false} />
                    </BeerModal>
                    <Card.Content>
                      <Card.Header>{name}</Card.Header>
                      
                      <Card.Description>
                       {description}
                      </Card.Description>
                    </Card.Content>
                    <Favored favoredProduct={!!favoredProducts[id]} product={product} />
                    {favoredMode ? <p>ggg</p> : ""}
                  </Card>
            
                
            )
            })
        )
    }
  return (
    <>
    {renderedProducts?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.slice(0,6))} </Card.Group> : ""}
    {renderedProducts?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.slice(6,12))} </Card.Group> : ""}
    {renderedProducts?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.slice(12,18))} </Card.Group> : ""}
    {renderedProducts?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.slice(18,24))} </Card.Group> : ""}
    </>
  )
}

export default ProductComponent

