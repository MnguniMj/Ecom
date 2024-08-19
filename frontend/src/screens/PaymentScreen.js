import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'

import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen() {
    const cart = useSelector( state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod ] = useState('')
    const [message, setMessage] = useState('')

    if(!shippingAddress.address){
        navigate('/shipping')
    }

    const submitHandler = (e) => {
        
        if(paymentMethod !== ''){

            e.preventDefault()
            dispatch(savePaymentMethod(paymentMethod))
            navigate('/placeorder')

        }else{

            e.preventDefault()
            setMessage('You need to select one of the listed payment methods')

        }

    }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>

        <Form.Label as='legend'> Select Payment Method</Form.Label>

        {message && <Message variant='danger'>{message}</Message>}

        <Col>
            <Form.Check
                type='radio'
                label='Paypal'
                id='paypal'
                name={paymentMethod}
                value='PayPal'
                onChange={(e) => setPaymentMethod(e.target.value)}
            >

            </Form.Check>

            <Form.Check
                type='radio'
                label='Credit Card'
                id='creditCard'
                name={paymentMethod}
                value='Credit Card'
                onChange={(e) => setPaymentMethod(e.target.value)}
            >

            </Form.Check>

            <Form.Check
                type='radio'
                label='Mpesa'
                id='mpesa'
                name={paymentMethod}
                value='Mpesa'
                onChange={(e) => setPaymentMethod(e.target.value)}
            >

            </Form.Check>

            <Form.Check
                type='radio'
                label='Ecocash'
                id='ecocash'
                name={paymentMethod}
                value='Ecocash'
                onChange={(e) => setPaymentMethod(e.target.value)}
            >

            </Form.Check>

        </Col>

        <Button type='submit' variant='primary' className='mt-3'>
            Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
