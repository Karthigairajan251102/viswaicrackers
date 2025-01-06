import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Button, Container,Image, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/viswaiCraclogo.png'
import './Navbars.css'
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';



function Navbars() {


    const[showInput, setShowInput]=useState(false)
    const handleClick =()=>{
        setShowInput(true)
    }

    const handleSubmit = () =>{
        alert("Incorrect Password")
    }


  return (
    <>

    {/* <Container fluid className='navani m-0 p-0 fixed-top'>
        <p className='discount m-0'>The 2024 Diwali Sale is now live! Shop early to take advantage of the best discounts and offers. Wishing you a joyful and prosperous Diwali!
        </p>
    </Container> */}
    <Container className='sticky-top' fluid id='offer' >
        <Row>
            <Col lg={12} md={12} sm={12} xs={12} className='discol d-flex'>
                <Container fluid className='navani m-0 p-0 d-flex'>
                    <p className='discount m-0'>The 2024 Diwali Sale is now live! Shop early to take advantage of the best discounts and offers. Wishing you a joyful and prosperous Diwali!
                    </p>
                </Container>
                <Container></Container>
               
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className='navcol'>
                <Container fluid className='navs '>

                    <Row>

                        <Col lg={8} md={8} sm={12} xs={12}>
                            <Navbar expand="lg"  id='Navs'>
                            
                            <Container fluid >
                                <Image src={logo} className='imglogo' style={{height:'50px',width:'50px',borderRadius:'50%'}}/>
                                <Navbar.Brand href="#" className='navbrand'>Viswai Crackers</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" className='scroll' />
                                <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="ms-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                    id='navscroll'
                                >
                                                    {/* <Button>price</Button> */}
                                    <Nav.Link href="/" className='navlin'>Home</Nav.Link>
                                    <Nav.Link href="/about" className='navlin'>About</Nav.Link>
                                    <Nav.Link href="/safety" className='navlin' id='safetylink' >Safety</Nav.Link>
                                    <Nav.Link href="/shop" className='navlin'>Shop</Nav.Link>
                                    <Container>
                                        <Nav.Link href="#" className='navlin' onClick={handleClick}>Admin</Nav.Link>
                                        {showInput && (
                                        <Container className='d-flex'>
                                            <input type="text" placeholder="Enter Password"  className='admininput'/>
                                            <Button onClick={handleSubmit} type='submit' className='adminbtn'>Submit</Button>
                                        </Container>
                                        )}
                                    </Container>
                                    <Button className='pricebtn'><a href='./src/assets/images/pricelist.pdf' download="pricelist" className='priceanger'>price</a></Button>

                            </Nav>
                                                
                            </Navbar.Collapse>
                            </Container>
                                    
                            </Navbar>
                        </Col>
            <Col lg={12} md={12} sm={12} xs={12} xl={4}>
            <Container>
             <Container className='d-flex justify-content-evenly mt-1' id='querynum' fluid>
                <h6 className='mt-2'>For Quries <br></br>& Bulk Order</h6>
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" className='mt-2' id='icon' />
                <h6 className='mt-2'>+91 9629 586 991 <br></br> +91 8667 084 120</h6>
                </Container>
                </Container>
                </Col>
        </Row>
                </Container>
            </Col>
        </Row>
    </Container>
    

    
   

    </>
  )
}

export default Navbars