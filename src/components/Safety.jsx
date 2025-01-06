import React from 'react'
import Navbars from './Navbars';
import './Safety.css'
import { Container,Row,Col,Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact'
import call from '../assets/images/callus.png'
import whatsapp from '../assets/images/watsapp.png'
import quick from '../assets/images/quickcopy.png'


function Safety() {

  return (
    <>
    <Navbars/>
    <Container className='cracks'>
        <h1>Viswai Crackers</h1>
        <p>There are certain Dos & Don'ts to follow while purchasing, bursting, and storing crackers. It is crucial to adhere to the precautions while bursting crackers, as a little negligence, ignorance, or carelessness can lead to a fatal injury.</p>
    </Container>


    <Container className='safety'>
        <Row>
            <Col>
                <h2>Do's</h2>
                <hr></hr>
                <Container className='d-flex'>
                    <FontAwesomeIcon icon={faCheck} className='tickicon' />
                    <Container>
                        <h5>Instructions</h5>
                        <p>Display fireworks as per the instructions mentioned on the pack.</p>
                    </Container>
                </Container>

                <Container className='d-flex'>
                    <FontAwesomeIcon icon={faCheck} className='tickicon' />
                    <Container>
                        <h5>Outdoor</h5>
                        <p>Use fireworks only outdoors.</p>
                    </Container>
                </Container>

                <Container className='d-flex'>
                    <FontAwesomeIcon icon={faCheck} className='tickicon' />
                    <Container>
                        <h5>Branded Fireworks</h5>
                        <p>Buy fireworks from authorized/reputed manufacturers only.</p>
                    </Container>
                </Container>

                <Container className='d-flex'>
                    <FontAwesomeIcon icon={faCheck} className='tickicon' />
                    <Container>
                        <h5>Distance</h5>
                        <p>Light only one firework at a time, by one person. Others should watch from a safe distance.</p>
                    </Container>
                </Container>

                <Container className='d-flex'>
                    <FontAwesomeIcon icon={faCheck} className='tickicon' />
                    <Container>
                        <h5>Supervision</h5>
                        <p>Always have adult supervision.</p>
                    </Container>
                </Container>

                <Container className='d-flex'>
                    <FontAwesomeIcon icon={faCheck} className='tickicon' />
                    <Container>
                        <h5>Water</h5>
                        <p>Keep two buckets of water handy in case of fire or any mishap.</p>
                    </Container>
                </Container>

            </Col>
            <Col>
            <h2>Don'ts</h2>
            <hr></hr>
            <Container className='d-flex'>
                <FontAwesomeIcon icon={faTimes} className='xicon' />
                <Container>
                    <h5>Don't make tricks </h5>
                    <p>Never make your own fireworks.</p>
                </Container>
            </Container>

            <Container className='d-flex'>
                <FontAwesomeIcon icon={faTimes} className='xicon' />
                <Container>
                    <h5>Don't relight</h5>
                    <p>Never try to relight or pick up fireworks that haven't fully ignited.</p>
                </Container>
            </Container>

            <Container className='d-flex'>
                <FontAwesomeIcon icon={faTimes} className='xicon' />
                <Container>
                    <h5>Don't carry it</h5>
                    <p>Never carry fireworks in your pockets.</p>
                </Container>
            </Container>

            <Container className='d-flex'>
                <FontAwesomeIcon icon={faTimes} className='xicon' />
                <Container>
                    <h5>Don't touch it</h5>
                    <p>After a fireworks display, never pick up fireworks that may be left over; they still may be active.</p>
                </Container>
            </Container>

            <Container className='d-flex'>
                <FontAwesomeIcon icon={faTimes} className='xicon' />
                <Container>
                    <h5>Do not use glass/metal</h5>
                    <p>Never shoot fireworks in metal or glass containers.</p>
                </Container>
            </Container>

            <Container className='d-flex'>
                <FontAwesomeIcon icon={faTimes} className='xicon' />
                <Container>
                    <h5>Don't wear loose clothes</h5>
                    <p>Do not wear loose clothing while using fireworks.</p>
                </Container>
            </Container>

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

export default Safety