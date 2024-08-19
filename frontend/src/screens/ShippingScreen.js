import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'

import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen() {

    const cart = useSelector( state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [address, setAddress] = useState( shippingAddress.address ) 
    const [city, setCity] = useState( shippingAddress.city ) 
    const [postalCode, setPostalCode] = useState( shippingAddress.postalCode ) 
    const [country, setCountry] = useState( shippingAddress.country )
    const [description, setDescription] = useState( shippingAddress.description )

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(saveShippingAddress({ address, city, postalCode, country, description }))

        navigate('/payment')
    }

  return (
    <FormContainer>
        <CheckoutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='address'>
            <Form.Label className='mt-3'>
                Address
            </Form.Label>
            <Form.Control
                required
                type='text'
                placeholder='Enter Address'
                value={address ? address : ''}
                onChange={(e) => setAddress(e.target.value)}
            >

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label className='mt-3'>
                City
            </Form.Label>
            <Form.Control
                required
                type='text'
                placeholder='Enter City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
            <Form.Label className='mt-3'>
                Postal Code
            </Form.Label>
            <Form.Control
                required
                type='text'
                placeholder='Postal Code'
                value={postalCode ? postalCode : ''}
                onChange={(e) => setPostalCode(e.target.value)}
            >

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
            <Form.Label className='mt-3'>
                Country
            </Form.Label>
            <Form.Control
                required
                type='text'
                placeholder='Enter Country'
                value={country ? country : setCountry('Lesotho')}
                onChange={(e) => setCountry(e.target.value)}
            >

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
            <Form.Label className='mt-3'>
                Description
            </Form.Label>
            <Form.Control
                as="textarea"
                type='text'
                placeholder='Enter Description'
                value={description ? description : ''}
                onChange={(e) => setDescription(e.target.value)}
            >

            </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
            Continue
        </Button>

      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
