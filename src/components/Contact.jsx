import React from 'react'
import { Button, Col, Container,Image, Row } from 'react-bootstrap';
import './Contact.css'
import logo from '../assets/images/viswaiCraclogo.png'
import mic from '../assets/images/mic.png'
import qr from '../assets/images/qrcode.jpg'
function Contact() {
  return (
    <>
    
    <Container className='contact'>
        <Container>
            <p>Contact us</p>
            <h5>For Call & Whatsapp</h5>
        </Container>
        <Container className='d-flex'>
            <Image src={mic}/>
            <Container>
            <p>Call us now</p>
            <h5>+91 9629 586 991</h5>
            </Container>
        </Container>
    </Container>

    <Container className='mt-5' id='locat'>

        <Row>

            <Col lg={4} md={4} sm={0} xs={0} className='logotext'>
                <Image src={logo} className='viscrac'/>
                <h6>Join us in celebrating the simple joy of crunching, and let our crackers elevate your every occasion.</h6>
            </Col>

            <Col lg={4} md={4} sm={6} xs={6}>
                <Container>
                    <h5>Social Links</h5>
                </Container>
                <Container>
                    <a href='https://www.instagram.com/p/Cx2PkTEhx1b/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D'>Instagram</a><br></br>
                    <a href='https://www.facebook.com/ViswaiCrackers/posts/pfbid02c6aSdngo1b2VHc2tECzL1rn4YgJsFmF9D1aZyAtpm7YKGAgKuYUk8tWugir1S'>FaceBook</a>
                </Container>  
                <Container className='d-flex mt-2'>
                    <h5 id='mail' >Email:</h5>
                    <h6  id='mail'>viswaicrackers@gmail.com</h6>
                </Container>
                <Container>
                    <h5>Chat with us</h5>
                    <h6>+91 9629 586 991</h6>
                    <h6>+91 8667 084 120</h6>
                    <h6>+91 97870 43835</h6>
                </Container>
            </Col>

                <Col lg={4} md={4} sm={6} xs={6}>
                    <h5>Location</h5>
                    <Image src={qr} className='qr'/>
                    <h5>Reach us here</h5>
                    <h6>2/2323/35, Om Muruga Nagar, Viswanatham, Sivakasi, Tamil Nadu - 626 189.</h6>
                </Col>
               
        </Row>
    </Container>
        <p className='copy m-0'>
            Copyright ©2005-2023 Viswai Crackers. All rights reserved. | Privacy Policy | Terms of Service
        </p>

    </>
  )
}

export default Contact