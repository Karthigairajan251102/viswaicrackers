import React,{useEffect} from 'react'
import './About.css'
import Navbars from './Navbars'
import Contact from './Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button, Col, Container,Image, Row } from 'react-bootstrap';
import testimonial from '../assets/images/testimonial.gif'
import logo from '../assets/images/viswaiCraclogo.png'
import gift from '../assets/products/gifts.png'
import call from '../assets/images/callus.png'
import whatsapp from '../assets/images/watsapp.png'
import quick from '../assets/images/quickcopy.png'
import { useNavigate } from 'react-router-dom'
function About() {

    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/shop')
    }
    useEffect(()=>{
        Aos.init();
      },[])


  return (
    <>

    <Navbars/>
    <Container className='gifcon' >
    <Image src={testimonial} className='gifimg' ></Image>
    <h1 className='aboutus'>About US</h1>
    </Container>

    <Container className='about'>
        <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
                <Container className='d-flex justify-content-center'>
                    <Image src={logo} className='logoimg'/>
                </Container> 
                <Container className='d-flex justify-content-center'>
                    <h6 className='aboutpara' data-aos="fade-up">
                        Ignite your celebrations with Viswai Crackers! For over several<br></br>
                        years, we've been lighting up moments of joy with our vibrant<br></br>
                        and high-quality fireworks. From dazzling crackers to sparkling<br></br>
                        sparklers, we offer a wide range of products that add excitement<br></br>
                        and color to any occasion. Join our community of happy<br></br>
                        customers and make your festivities unforgettable with Viswai<br></br>
                        Crackers. Explore our collection today and let the celebration begin!
                    </h6>
                </Container>
                <Container className='d-flex justify-content-center mt-4'>
                    <Button className='viewbtn' onClick={handleClick}>View Products</Button>
                </Container>
            </Col>
            <Col className='aboutshop' lg={6} md={6} sm={12} xs={12}>
                <h1 className='mt-5'>Viswai Crackers !</h1>
                <h5 className='mt-5'data-aos="fade-up">
                    Viswai CRACKERS is a family of<br></br>
                    delightful cracker brands and a<br></br>
                    collection of select joyspreading and<br></br>
                    safe fireworks
                </h5>
                <Image src={gift} className='logoimg mt-5'/>
            </Col>
        </Row>
    </Container>
    <Container>
        <Image src={whatsapp} className='whats fixed-bottom mb-5'/><br></br>
    </Container>
    <Container className='d-flex justify-content-between p-0 fixed-bottom'>
        <Image src={call} className='call '/>
        
        <Image src={quick} className='call '/>
        
    </Container>
    

    <Contact/>
    
    </>
  )
}

export default About