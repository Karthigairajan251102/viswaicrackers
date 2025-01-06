import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Col, Container,Image, Row } from 'react-bootstrap';
import diw1 from '../assets/images/diw1.png'
import diw2 from '../assets/images/diw2.png'
import diwali from '../assets/images/Diwali.jpg'
import Slider from "react-slick";
import price1 from '../assets/images/pricebanner1.jpeg'
import price2 from '../assets/images/pricebanner2.jpeg'
import price3 from '../assets/images/pricebanner3.jpeg'
import price4 from '../assets/images/pricebanner4.jpeg'
import price5 from '../assets/images/pricebanner5.jpeg'
import price6 from '../assets/images/pricebanner6.jpeg'
import star from '../assets/images/star.png'
import Navbars from './Navbars'
import About from './About'
import Contact from './Contact'
import call from '../assets/images/callus.png'
import whatsapp from '../assets/images/watsapp.png'
import quick from '../assets/images/quickcopy.png'
import { useNavigate } from 'react-router-dom';
function Home() {

  const navigate= useNavigate();

  const handleClick = () =>{
    navigate('/shop')
  }

  const handleCallClick = () => {
    const phoneNumber = "123-456-7890"; 
    window.location.href = `tel:${phoneNumber}`; 
  };

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const datas=[
    {
      
      name:'GRAND CHAKKARS',
      image:'./src/assets/products/chakkar.png'
    },
    {
      
      name:'FLOWER POTS',
      image:'./src/assets/products/pots.png'
    },
    {
      name:'FANCY FOUNTAIN',
      image: './src/assets/products/fountain.png'
    },
    {
      name: 'GIFT BOXES',
      image: './src/assets/products/gifts.png'
    },
    {
      name:'ROCKET',
      image:'./src/assets/products/rocket.png'
    },
    {
      name:'CHORSA & GAINT CRACKERS',
      image:'./src/assets/products/chorsa.png'
    },
    {
      name:'COLOR MATCHES',
      image:'./src/assets/products/colormatch.png'
    },
    {
      name:'SINGLE SOUND CRACKERS',
      image:'./src/assets/products/shots.png'
    },
    {
      name:'DEKUXE CRAKERS',
      image:'./src/assets/products/saram.png'
    },
    {
      name:'AUTOM BOMB',
      image:'./src/assets/products/bomb.png'
    },
    {
      name:'WALA CRACKERS',
      image:'./src/assets/products/wala.png'
    },
    {
      name:'SPARKLERS',
      image:'./src/assets/products/chorsa.png'
    },
  ]


  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
    <Navbars />
    {/* CAROUSEL START */}

    <Carousel>
      <Carousel.Item interval={1000}>
        <Image src={diw1} alt="First Slide" className='caroimg'/>
        <Carousel.Caption>
          <h3 className='welcome'>Welcome to viswaicrackers !</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <Image src={diw2} alt="Second Slide" className='caroimg'/>
        <Carousel.Caption>
          <h3 className='welcome'>Welcome to viswaicrackers !</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* CAROUSEL END */}


    <Container className='branded'>
      <Row>
        <Col lg={4} md={4} sm={12}>
          <Image src={diwali} alt='Diwali'className='diwali'/>
        </Col>
        <Col lg={8} md={8} sm={12}>

          <h4 className='sivakasi'>Buy Brandred Sivakasi Crackers at viswaicrackers</h4>

          <h6 className='located'>We have immense pleasure in welcoming you to visit our mega fireworks showroom located in<br></br>
          Sivakasi, where you can directly place your valuable orders and fulfill all your cracker’s<br></br>
          requirements at one stop.</h6>

          <h6 className='industry'>We are in the cracker industry for the past several years. It's our pride in supplying our<br></br>
          esteemed customers with the best quality crackers at the lowest market prices.</h6><br></br>

          <Button  className='shopnow' onClick={handleClick}>Shop Now</Button>
        </Col>
      </Row>
    </Container>
    <Container>
    <Slider {...settings} className='slide'>
      <div className='banner'>
        <Image src={price1} className='priceimg' id='img'></Image>
      </div>
      <div className='banner'>
        <Image src={price2} className='priceimg'></Image>
      </div>
      <div>
        <Image src={price3} className='priceimg'></Image>
      </div>
      <div>
        <Image src={price4} className='priceimg'></Image>
      </div>
      <div>
        <Image src={price5} className='priceimg'></Image>
      </div>
      <div>
        <Image src={price6} className='priceimg'></Image>
      </div>
    </Slider>
    </Container>

    <h1 className='ourprod'>Our Products</h1>

    {/* PRODUCT CARDS START */}

    <Container >
      <Row >
        {datas.map((data,index)=>(
          
          <Col key={index} lg={3} md={3} sm={6} xs={6} >
            <Container className='prodcon'   >
              <Container className='prodimage'>
                <Image src={data.image} className='prodsimg' data-aos="fade-up" ></Image>
              </Container>
            <h6 className='prodname' data-aos="fade-up" >{data.name}</h6>
            </Container>
          </Col>
          
          
        ))}
      </Row>
    </Container>
  

    {/* PRODUCT CARDS END */}
    
    <Container className='d-flex justify-content-center mt-5'>
      <Button  className='viewall' onClick={handleClick}>View All Products</Button>
    </Container>
    

    {/*  REVIEW SECTION */}

    <Container className='review'>
    <Slider {...settings}>
      <div>
        <h3>Karthi</h3>
        <h6>Good Quality Crackers</h6>
        <div className='revimg'>
        <Image src={star} alt='Rating'/>
        </div>
      </div>
      <div>
        <h3>Seeni</h3>
        <h6>Good Quality Crackers</h6>
        <div className='revimg'>
        <Image src={star} alt='Rating'/>
        </div>
      </div>
      <div>
        <h3>Ajith</h3>
        <h6>Good Quality Crackers</h6>
        <div className='revimg'>
        <Image src={star} alt='Rating'/>
        </div>
      </div>
      <div>
        <h3>Suresh</h3>
        <h6>Good Quality Crackers</h6>
        <div className='revimg'>
        <Image src={star} alt='Rating'/>
        </div>
      </div>
      <div>
        <h3>Shasvanth</h3>
        <h6>Good Quality Crackers</h6>
        <div className='revimg'>
        <Image src={star} alt='Rating'/>
        </div>
      </div>
      <div>
        <h3>Perumal</h3>
        <h6>Good Quality Crackers</h6>
        <div className='revimg'>
        <Image src={star} alt='Rating'/>
        </div>
      </div>
    </Slider>
    </Container>

    <Container>
      <Image src={whatsapp} className='whats fixed-bottom mb-5'/><br></br>
      </Container>
      <Container className='d-flex justify-content-between p-0 fixed-bottom'>
        <Image src={call} className='call ' onClick={handleCallClick}/>
            
        <Image src={quick} className='call ' onClick={handleClick}/>
            
      </Container>


    <Contact/>

    </>

    

  )
}

export default Home