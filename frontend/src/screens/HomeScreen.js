import React, {useEffect} from 'react'
import {Row, Col}  from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

import Product from '../components/Product.js'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  return (
    <div>
        {
          loading ? <Loader/>  // displaying a loading icon while in load state
            :error ? <Message variant='danger'>{error}</Message>
              : 
                <Row>
                  <h1>Latest Product</h1>

                  {products.map(products =>(
                        <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={products}></Product>
                    </Col>
                  ))}
                </Row>
        }
        
    </div>
  )
}

export default HomeScreen