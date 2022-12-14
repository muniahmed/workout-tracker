import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer style={{
            width: '100%',
            postion: 'relative',
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; Peak Tracker</Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer