import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import Message from '../components/Message'

import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

function LoginScreen() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const location = useLocation()
  const navigate = useNavigate()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userLogin = useSelector(state => state.userLog)

  const {error, loading, userInfo} = userLogin

  useEffect(() => {
    if(userInfo){
        navigate(redirect)
    }
  }, [userInfo,navigate,redirect])

  const submitHandler = (e) => {

        e.preventDefault()

        dispatch(login(email, password))
  }

  return (
    <FormContainer>
        <h1>Log In</h1>

        {error && <Message>{error}</Message>}

        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label className='mt-3'>
                    Email Address
                </Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'> 
                <Form.Label className='mt-3'>
                    Password
                </Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >

                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='my-3'>Sign In</Button>
        </Form>

        <Row>
            <Col>
                Don't have an account? 
                <Link to={
                    redirect ? `/register?redirect=${redirect}` : '/register' }> 
                    Register 
                </Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen
