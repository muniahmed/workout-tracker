import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className='main'><Container>

            <Row>
                <div className='intro-text'>
                    <div>
                        <h1 className='title'>Strength | Power | Discipline</h1>
                        <p className='subtitle'>Track your fitness journey. For free!</p>
                    </div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button size='lg' className='landingbutton mx-3' variant='primary'>Login</Button>
                        </a>
                        <a href='/register'>
                            <Button size='lg' className='landingbutton mx-3' variant='outline-primary'>Signup</Button>
                        </a>
                    </div>
                </div>
            </Row>
        </Container></div>
    )
}

export default LandingPage