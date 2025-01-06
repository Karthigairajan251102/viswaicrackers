import React, { useState, useEffect } from 'react';
import './Shop.css';
import products from '../Products.json'
import Navbars from './Navbars'
import Contact from './Contact'
import { FaGithub } from 'react-icons/fa'; 
import { MdArrowDownward } from 'react-icons/md';
import { Button, Col, Container,Image, Row } from 'react-bootstrap';
import sale from '../assets/images/sale.png'
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Shop() {

  
  const[preview , setPreview]=useState(false)
  const [input, setInput] = useState({
    name:"",
    phone:"",
    address: ""
  });

  
  const [isVisible, setIsVisible]=useState({
    item1: true,
    item2: true,
    item3: true,
    item4: true,
    item5: true,
    item6:true,
    item7:true,
    item8:true,
    item9:true,
    item10:true,
    item11: true,
    item12: true,
    item13: true,
    item14: true,
    item15: true,
    item16:true,
    item17:true,
    item18:true,
    item19:true,
    item20: true,
    item21: true,
    item22: true,
    item23: true,
    item24: true,
    item25:true,
    item26:true,
    item27:true,
    item28:true,
    item29: true,
    item30: true,
    item31: true,
    item32: true,
    item33: true,
    item34:true,
  })

  const handlePrview = () =>{
    setPreview(!preview);
  }
  const handleChange = (e) =>{
    const {name,value} =  e.target;
    setInput((prev)=>{
      return {...prev, [name] : value}
    })
    
  }

  


  const handleVisible = (item) => {
    setIsVisible((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <>
    <Navbars/>
        
        <Container className='d-flex justify-content-center' fluid>
            <Image src={sale} id='imgsale' ></Image>
        </Container>


       
      <Container className='lists m-0 p-0' fluid>
          <Container fluid className=' lists '> 
               <Row>
                  <Col>
                  <h3 className='mt-5'>Start Your Shopping Here</h3>
                  </Col>
                  <Col className='mt-5'>
                  <Container className='previews'>
                  <Button onClick={handlePrview} {...preview ? 'Show' : 'Hide'}>Preview</Button>
                  {preview && (
                    <Container className='previewbox'>
                    <Container >
                      <Row>
                        <Col>
                        <h5>Enquery No: #1683</h5>
                        <h6>Phone: 96295 86991</h6>
                        </Col>
                        <Col>
                        <h4>Viswai Crackers</h4>
                        <h6>2/2323/35, Om Muruga nagar, Viswanatham,</h6>
                        <h6>Sivakasi-626186</h6>
                        </Col>
                        <Col>
                        <h6>Total: 0.00</h6>
                        <h6>Discount: 80%</h6>
                        <h6>E-mail : viswaicrackers@gmail.com</h6>
                        </Col>
                      </Row>
                    </Container>

                    <Container className='customerdetail'>
                      <h5>Customer Details:</h5>
                      <h6>Name: {input.name}</h6>
                      <h6>Phone Number: {input.phone}</h6>
                      <h6>Address: {input.address}</h6>
                    </Container>

                    <Table >
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>Image</th>
                          <th>Product</th>
                          <th>Actual Price</th>
                          <th>Discount Price</th>
                          <th>Quantity</th>
                          <th>Availability</th>
                        </tr>
                      </thead>

                    </Table>

                    <Container>
                      <Row>
                        <Col>
                        <h5>Name:</h5>
                        <input type='text' name='name' onChange={handleChange}></input>
                        </Col>
                        <Col>
                        <h5>Phone Number:</h5>
                        <input type='text' name='phone' onChange={handleChange}></input>
                        </Col>
                        <Col>
                        <h5>Address:</h5>
                        <input type='text' name='address' onChange={handleChange}></input>
                        </Col>
                      </Row>
                    </Container>
                    <Container>
                    <Button className='mt-2 d-flex justify-content-center' >Submit</Button> 
                    </Container>
                    </Container>
                  )}
                     


                  
                  </Container>
                  </Col>
                  <Col className='mt-5'>
                  <Button>Clear</Button>
                  </Col>
               </Row>
          </Container>
          <Container className='mt-5'>
          <ul>
                <li>Please Mention your Full name, contact number, Address where you want the crackers to be delivered</li>
                <li>Once you submitted your enquiry our executive will call you within 12 hours</li>
                <li>Delivery cost varies depends on the order. For orders more than Rs.3000, You will get an existing gift from us.</li>
                <li>Your orders will be verified with them and payment details will be shared</li>
                <li>All of the orders will delivered via reputated parcel services near by your location.</li>
                <li>As per Supreme Court Law, crackers should not be sold online. So this is the procedure we have to follow.</li>
              </ul>
          </Container>


          {/* FAMLIY PACK START */}

          <Container>

          <Container className='mt-5' onClick={() => handleVisible('item1')} id='listcontainer' {...isVisible.item1 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>DiwaliFamily Combo Pack (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
              </Row>
              </Container>  
            {isVisible.item1 && (
              <Table className='listtable'>
              <thead>
                <tr>
                  
                  <th>Code</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Actual Price</th>
                  <th>Discount Price</th>
                  <th>Quantity</th>
                  <th>Availability</th>
                </tr>
              </thead>
      
              <tbody>
                {products.fampack.map((prods,index)=>(
                  <tr key={index}>
                    <td>{prods.code}</td>
                    <td><Image src={prods.image}  className='price'/></td>
                    <td>{prods.name}</td>
                    <td><del>{prods.actualprice}</del></td>
                    <td>{prods.dicount}</td>
                    <td><input type='number' className='tblinput'></input></td>
                    <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                  </tr>
                ))}
              </tbody>
      
              </Table>
            )}
          </Container>


          {/* FAMILY PACK END */}



          {/* ADULT PACK START */}

          <Container>
          <Container onClick={() => handleVisible('item2')} {...isVisible.item2 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Adult Combo pack (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
              </Row>  
              </Container>
            {isVisible.item2 && (
              <Table>
              <thead>
                <tr>
                  
                  <th>Code</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Actual Price</th>
                  <th>Discount Price</th>
                  <th>Quantity</th>
                  <th>Availability</th>
                </tr>
              </thead>
      
              <tbody>
                {products.adult.map((prods,index)=>(
                  <tr key={index}>
                    <td>{prods.code}</td>
                    <td><Image src={prods.image}  className='price'/></td>
                    <td>{prods.name}</td>
                    <td><del>{prods.actualprice}</del></td>
                    <td>{prods.dicount}</td>
                    <td><input type='number' className='tblinput'></input></td>
                    <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                  </tr>
                ))}
              </tbody>
      
              </Table>
            )}
          </Container>

          
          {/* ADULT PACK END */}


          {/* SPARKLERS PACK START */}

            <Container>
            <Container onClick={() => handleVisible('item3')} {...isVisible.item3 ? 'Hide' : 'Show'}>
              <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Sparklers (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
              </Row> 
              </Container> 
              {isVisible.item3 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.sparklers.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          
          {/* SPARKLERS PACK END */}


          {/* ONESOUND PACK START */}

        <Container>
          <Container onClick={() => handleVisible('item4')} {...isVisible.item4 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>One Sound Crackers (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row> 
            </Container> 
              {isVisible.item4 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.onesound.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          
          {/* ONE SOUND PACK END */}

          {/* FLOWER POTS PACK START */}

          <Container>

          <Container onClick={() => handleVisible('item5')} {...isVisible.item5 ? 'Hide' : 'Show'} >
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Flower Pots (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
              </Row> 
              </Container> 
              {isVisible.item5 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pots.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          
          {/* FLOWER POTS PACK END */}


          {/* CHAKKARS PACK START */}
          
          <Container>
          <Container onClick={() => handleVisible('item6')} {...isVisible.item6 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Ground Chakkars (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
              </Row>
              </Container>  
              {isVisible.item6 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.chakkar.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          
          {/* CHAKKARS PACK END */}

          {/* TWINGLING STAR PACK START */}
          
          <Container>
          <Container onClick={() => handleVisible('item7')} {...isVisible.item7 ? 'Hide' : 'Show'}>
          <Row>
              <Col>
              <Container className='d-flex justify-content-evenly' id='prodlist'>
                <Container className='d-flex justify-content-start'>
                <FaGithub size={25} color="lightgreen" className='mt-4' />
                <h6 className='mt-4'>Twingling Star(80% Dicount)</h6>
                </Container>
                <MdArrowDownward size={25} color="white" className='mt-4' />
              </Container>
              </Col>
              <Col></Col>
            </Row>  
            </Container>
              {isVisible.item7 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.twinglingstar.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          
          {/* C\TWINGLING STAR PACK END */}



          {/* MATCH BOX PACK START */}
          <Container>

          <Container onClick={() => handleVisible('item8')} {...isVisible.item8 ? 'Hide' : 'Show'}>
          <Row>
              <Col>
              <Container className='d-flex justify-content-evenly' id='prodlist'>
                <Container className='d-flex justify-content-start'>
                <FaGithub size={25} color="lightgreen" className='mt-4' />
                <h6 className='mt-4'>Match Boxes Children's SPL</h6>
                </Container>
                <MdArrowDownward size={25} color="white" className='mt-4' />
              </Container>
              </Col>
              <Col></Col>
            </Row>       
            </Container>              
            {isVisible.item8 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.matchbox.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          
          {/* MATCH BOX  PACK END */}



          {/* NEW LANCH PACK END */}

          <Container>

          <Container onClick={() => handleVisible('item9')} {...isVisible.item9 ? 'Hide' : 'Show'} >
            <Row>
              <Col>
              <Container className='d-flex justify-content-evenly' id='prodlist'>
                <Container className='d-flex justify-content-start'>
                <FaGithub size={25} color="lightgreen" className='mt-4' />
                <h6 className='mt-4'>New Lanch Crackers</h6>
                </Container>
                <MdArrowDownward size={25} color="white" className='mt-4' />
              </Container>
              </Col>
              <Col></Col>
            </Row>  
            </Container>            
            {isVisible.item9 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.newlanch.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

         
          
          {/* NEW LANCH PACK END */}


          {/* BABY'S PACK START */}

        <Container>
          <Container onClick={() => handleVisible('item10')} {...isVisible.item10 ? 'Hide' : 'Show'}>
          <Row>
              <Col>
              <Container className='d-flex justify-content-evenly' id='prodlist'>
                <Container className='d-flex justify-content-start'>
                <FaGithub size={25} color="lightgreen" className='mt-4' />
                <h6 className='mt-4'>Baby's Special</h6>
                </Container>
                <MdArrowDownward size={25} color="white" className='mt-4' />
              </Container>
              </Col>
              <Col></Col>
            </Row> 
            </Container> 

            {isVisible.item10 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.babyspl.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
            
          </Container>


          {/* BABY'S PACK END */}


          {/* BIJILI START */}
          <Container>
          <Container onClick={() => handleVisible('item11')} {...isVisible.item11 ? 'Hide' : 'Show'}>
          <Row>
              <Col>
              <Container className='d-flex justify-content-evenly' id='prodlist'>
                <Container className='d-flex justify-content-start'>
                <FaGithub size={25} color="lightgreen" className='mt-4' />
                <h6 className='mt-4'>Bijili Crackers (80% Discount)</h6>
                </Container>
                <MdArrowDownward size={25} color="white" className='mt-4' />
              </Container>
              </Col>
              <Col></Col>
            </Row>  
            </Container>

            {isVisible.item11 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.bijili.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td>{prods.image}</td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
            
          </Container>


          {/* BIJILI END */}



           {/* BOMB PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item12')} {...isVisible.item12 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Bombs Crackers (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item12 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.bombs.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* BOMB PACK END */}


           {/* ROCKET PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item13')} {...isVisible.item13 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Rockets (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item13 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.rocket.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* ROCKET PACK END */}



          {/* SIZZLING SERIES PACK START */}

        <Container>
          <Container onClick={() => handleVisible('item14')} {...isVisible.item14 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Sizzling Series (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row> 
            </Container> 
              {isVisible.item14 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.sizzling.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* SIZZLING SERIES PACK END */}

          {/* CANDLE & TORCHES PACK START */}

        <Container>
          <Container onClick={() => handleVisible('item15')} {...isVisible.item15 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Candle & Torches (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row> 
            </Container> 
              {isVisible.item15 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.candle.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* CANDLE & TORCHES PACK END */}



          
          {/* COLOR FOUNTAION PACK START */}

        <Container>
          <Container onClick={() => handleVisible('item16')} {...isVisible.item16 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Color Fountation (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item16 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.colorFount.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* Color Fountaion PACK END */}

            {/* SPECIAL FOUNTATION PACK START */}

          <Container>
            <Container onClick={() => handleVisible('item17')} {...isVisible.item17 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Special Fountation (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item17 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.splFount.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* SPECIAL Fountaion PACK END */}


           {/* FANCY NOVELITES PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item18')} {...isVisible.item18 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Fancy Novelites (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row> 
            </Container> 
              {isVisible.item18 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.novelite.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td>{prods.image}</td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* FANCY NOVELITES PACK END */}



          {/* WHISTLE PACK START */}

          <Container>
          <Container onClick={() => handleVisible('item19')} {...isVisible.item19 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Whistle Sound Series & PeacockFountains (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item19 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.whistle.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* Whistle PACK END */}



          {/* FANCY FOUNTAIN PACK START */}

        <Container>
          <Container onClick={() => handleVisible('item20')} {...isVisible.item20 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Fancy Fountains (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>
            </Container>  
              {isVisible.item20 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.fancyFount.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image}  className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* FANCY FOUNTATION PACK END */}



           {/* VANITHA SPECIAL PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item21')} {...isVisible.item21 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Vanitha Special Items (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>
            </Container>  
              {isVisible.item21 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.vanithSpl.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td>{prods.image}</td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* VANITHA SPECIAL PACK END */}


           {/* SKY SHOT PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item22')} {...isVisible.item22 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Sky Shots (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>
            </Container>  
              {isVisible.item22 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.skyShot.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* SKY SHOT PACK END */}
          

           {/* FANCY PACK START */}

          <Container>   
           <Container onClick={() => handleVisible('item23')} {...isVisible.item23 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> 2" Fancy (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>
            </Container>   
              {isVisible.item23 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.fancy.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* FANCY PACK END */}

          {/* PANDIAN SPECIAL PACK START */}

        <Container>
          <Container onClick={() => handleVisible('item24')} {...isVisible.item24 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Pandian's 2 3/4" Fancy(3pcs) (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row> 
          </Container> 
              {isVisible.item24 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pandian.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* PANDIAN SPECIAL PACK END */}

           {/* PANDIAN MEGA PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item25')} {...isVisible.item25 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Pandian's 3 1/2" Mega Arial Fancy(3pcs) (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item25 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pandianMega.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* PANDIAN MEGA PACK END */}

          {/* PANDIAN SILVER START */}

        <Container>
          <Container onClick={() => handleVisible('item26')} {...isVisible.item26 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Pandian's Silver  Fancy(8 in 1) (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item26 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pandianSilver.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          {/* PANDIAN SILVER PACK END */}

           {/* PANDIAN GOLDEN PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item27')} {...isVisible.item27 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Pandian's Golden Wonder  Fancy(80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item27 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pandianGold.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td>{prods.image}</td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>
          

          {/* PANDIAN GOLDEN PACK END */}

          {/* PANDIAN DOUBLE BALLS START */}

          <Container>
           <Container onClick={() => handleVisible('item28')} {...isVisible.item28 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Pandian's Double Balls  Fancy(80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item28 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pandianDouble.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>
          

          {/* PANDIAN DOUBLE BALLS PACK END */}

          {/* PANDIAN MEGA DISPLAY START */}

          <Container>
           <Container onClick={() => handleVisible('item29')} {...isVisible.item29 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Pandian's Mega Display  Fancy(80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item29 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pandianDisplay.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>
          

          {/* PANDIAN MEGA DISPLAY PACK END */}

           {/* PANDIAN WONDERFULL REPEATING SHOTS START */}

           <Container>
           <Container onClick={() => handleVisible('item30')} {...isVisible.item30 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Pandian's Wonderfull Repeating Shots(80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item30 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.pandianRepeat.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>
          

          {/* PANDIAN WONDERFULL REPEATING SHOTS PACK END */}

           {/* JAYA'S RUBY BADA DISPLAY PACK START */}

           <Container>
           <Container onClick={() => handleVisible('item31')} {...isVisible.item31 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Jaya Ruby's Bada Display(80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item31 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.jaya.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>
          

          {/* JAYA'S RUBY BADA DISPLAY PACK END */}

          {/* MULTICOLOR REPEATING SHOTS PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item32')} {...isVisible.item32 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'> Multicolor Repeating shots(80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item32 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.repeat.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td>{prods.image}</td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>
          

          {/* MULTICOLOR REPEATING SHOTS PACK END */}

          {/* AK & MATHAN'S MULTICOLOR  SHOTS PACK START */}

          <Container>
           <Container onClick={() => handleVisible('item33')} {...isVisible.item33 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>(AK & Mathan's) Multicolor shots(80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item33 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.Ak.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td>{prods.image}</td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>
          

          {/* AK AND MATHAN'S MULTICOLOR SHOTS PACK END */}

           {/* SETOUT SERIES START */}

           <Container>
           <Container onClick={() => handleVisible('item34')} {...isVisible.item34 ? 'Hide' : 'Show'}>
            <Row>
                <Col>
                <Container className='d-flex justify-content-evenly' id='prodlist'>
                  <Container className='d-flex justify-content-start'>
                  <FaGithub size={25} color="lightgreen" className='mt-4' />
                  <h6 className='mt-4'>Pandian's (Mega Setout Series) (80% Discount)</h6>
                  </Container>
                  <MdArrowDownward size={25} color="white" className='mt-4' />
                </Container>
                </Col>
                <Col></Col>
            </Row>  
            </Container>
              {isVisible.item34 && (
                <Table>
                <thead>
                  <tr>
                    
                    <th>Code</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Actual Price</th>
                    <th>Discount Price</th>
                    <th>Quantity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
        
                <tbody>
                  {products.setOut.map((prods,index)=>(
                    <tr key={index}>
                      <td>{prods.code}</td>
                      <td><Image src={prods.image} className='price'/></td>
                      <td>{prods.name}</td>
                      <td><del>{prods.actualprice}</del></td>
                      <td>{prods.dicount}</td>
                      <td><input type='number' className='tblinput'></input></td>
                      <td><FontAwesomeIcon icon={faCheck} className='tickicon' /></td>
                    </tr>
                  ))}
                </tbody>
        
                </Table>
              )}
          </Container>

          

          

          {/* MEGA SETOUT SERIES PACK END */}

      </Container>    

      <Contact/>
    </>
  )
}

export default Shop