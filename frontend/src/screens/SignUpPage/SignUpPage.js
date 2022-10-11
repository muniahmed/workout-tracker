import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../MainScreen/MainScreen";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    let navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            navigate("/exercises");
        }
    });


    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do no match");
        } else {
            setMessage(null)
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                setLoading(true);

                const { data } = await axios.post(
                    "/api/users",
                    { name, email, password },
                    config
                )

                setLoading(false);
                localStorage.setItem("userInfo", JSON.stringify(data));
            } catch (error) {
                setError(error.response.data.message);
                setLoading(false);
            }
        }
    }
    return (
        <MainScreen title="SignUp">
            <div className="signupContainer">
                <Form onSubmit={submitHandler}>

                    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                    {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                    {loading && <Loading />}

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="on"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="on"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Register
                    </Button>
                    <Form.Group className="py-3">
                        <Form.Text className="text-muted">
                            Have an account already? <Link to="/login">Login Here</Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        </MainScreen>
    );
};

export default SignUpPage;
