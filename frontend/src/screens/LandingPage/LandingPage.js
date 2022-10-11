import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            navigate("/exercises");
        }
    });

    return (
        <div className='main'><Container>

            <Row>
                <div className='intro-text'>
                    <div>
                        <h1 className='title'>Peak Tracker</h1>
                        <p className='subtitle'>Track the journey to your fitness peak</p>
                    </div>
                    <div className='buttonContainer'>
                        <Link to='/login'>
                            <Button size='lg' className='landingbutton mx-3' variant='primary'>Login</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button size='lg' className='landingbutton mx-3' variant='outline-primary'>Signup</Button>
                        </Link>
                    </div>
                </div>
            </Row>
        </Container></div>
    )
}

export default LandingPage