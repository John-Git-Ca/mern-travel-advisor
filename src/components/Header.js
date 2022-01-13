import Button from '@restart/ui/esm/Button'
import React, {useState} from 'react'
import { Navbar, NavbarBrand, Col, Form } from 'react-bootstrap'

const Header = () => {

  const [search, setSearch] = useState('')

  const handleSearch = (e) =>{
    e.preventDefault()
    console.log(search)
  }

  return (
    <Navbar className='bg-info'>
      <Col sm={8} xs={8}>
        <NavbarBrand>Travel Advisor</NavbarBrand>
      </Col>
      <Col sm={2} xs={2}>Discover New Places</Col>
      <Col sm={2} xs={2}>
        <Form onSubmit={handleSearch}>
          <Form.Control value={search} onChange={(e)=>setSearch(e.target.value)}></Form.Control>
          <Button type='submit'>btn</Button>
        </Form>
      </Col>
    </Navbar>
  )
}

export default Header
