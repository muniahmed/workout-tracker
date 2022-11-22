import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../MainScreen/MainScreen'
import axios from 'axios';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const MyRoutines = () => {
    const [exercises, setExercises] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const deleteHandler = async (id, index) => {
        if (window.confirm("Are you sure?")) {

            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`
                    },
                };

                setLoading(true);
                await axios.delete(`/api/exercises/${id}`, config);

                exercises.splice(index, 1);

                window.location.reload(false);

            } catch (error) {
                setError(error.response.data.message);
                setLoading(false);
            }

        }
    }


    const fetchExercises = async () => {

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                },
            };

            setLoading(true);

            const { data } = await axios.get('/api/exercises', config);
            setExercises(data);

            setLoading(false);

        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchExercises();
    }, [])

    return (
        <MainScreen title={`Welcome Back ${userInfo.name}`} >
            <Link to='/addexercise'>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
                    Add New Exercise
                </Button>
            </Link>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}

            {exercises.map((exercise, index) => (
                <Accordion key={exercise._id}>
                    <Card className='my-2'>
                        <Accordion.Header style={{ display: "flex" }}>
                            <span className='text-decoration-none' style={{
                                color: "black",
                                textDecoration: "none",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 18
                            }}>{exercise.name}</span>

                            <div>
                                <Button >Edit</Button>
                                <Button variant='danger' className='mx-2' onClick={() => deleteHandler(exercise._id, exercise.index)}>Delete</Button>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>

                            <Badge className='bg-success'>
                                Workout - {exercise.name}
                            </Badge>

                            <blockquote className="blockquote mb-0">
                                <p>
                                    {`Sets: ${exercise.sets}, Rets: ${exercise.reps}, Weight: ${exercise.weight}`}
                                </p>
                                <footer className="blockquote-footer">
                                    {`Created on - ${exercise.createdAt}`}
                                </footer>
                            </blockquote>
                        </Accordion.Body>
                    </Card>
                </Accordion>))}

        </MainScreen>
    )
}

export default MyRoutines;